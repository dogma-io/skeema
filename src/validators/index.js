/** @flow */

import type {ArraySchema, Schema, State} from '../types'
import boolean from './boolean'
import integer from './integer'
import number from './number'
import {isPositiveInteger} from './numeric'
import object from './object'
import string from './string'
import {initState, mergeState, validateKeys} from './utils'

export function validateArray(schema: ArraySchema, path: string): State {
  let state = validateKeys(
    schema,
    path,
    ['type'],
    [
      'additionalItems',
      'contains',
      'items',
      'maxItems',
      'minItems',
      'uniqueItems',
    ],
  )

  const {additionalItems, contains, items, maxItems, minItems} = schema

  if (additionalItems !== undefined && !Array.isArray(items)) {
    state.warnings.push({
      message:
        'additionalItems should not be present when items is not an Array',
      path: `${path}.additionalItems`,
    })
  }

  if (contains !== undefined) {
    state = mergeState(state, validateSchema(contains, `${path}.contains`))

    if (items !== undefined) {
      state.warnings.push({
        message: 'contains should not be present when items is present',
        path: `${path}.contains`,
      })
    }
  }

  if (Array.isArray(items)) {
    state = items.reduce(
      (accumulator: State, currentValue: Schema, index: number): State =>
        mergeState(
          accumulator,
          validateSchema(currentValue, `${path}.items[${index}]`),
        ),
      state,
    )
  } else if (items !== undefined) {
    state = mergeState(state, validateSchema(items, `${path}.items`))
  }

  if (maxItems !== undefined) {
    if (!isPositiveInteger(maxItems)) {
      state.errors.push({
        message: 'maxItems must be a positive integer',
        path: `${path}.maxItems`,
      })
    }

    if (minItems !== undefined && maxItems < minItems) {
      state.errors.push({
        message: 'maxItems cannot be less than minItems',
        path: `${path}.maxItems`,
      })
    }
  }

  if (minItems !== undefined && !isPositiveInteger(minItems)) {
    state.errors.push({
      message: 'minItems must be a positive integer',
      path: `${path}.minItems`,
    })
  }

  return state
}

const VALIDATORS = {
  array: validateArray,
  boolean,
  integer,
  number,
  object,
  string,
}

function validateSchema(schema: Schema, path?: string = ''): State {
  if (schema.type in VALIDATORS) {
    // eslint-disable-next-line flowtype/no-weak-types
    return VALIDATORS[schema.type]((schema: any), path)
  }

  const state = initState()

  state.errors.push({
    message: `Unknown type "${schema.type}"`,
    path: `${path}.type`,
  })

  return state
}

export default validateSchema
