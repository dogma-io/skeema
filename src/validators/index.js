/** @flow */

import type {ArraySchema, ObjectSchema, Schema, State} from '../types'
import boolean from './boolean'
import integer from './integer'
import nil from './null'
import number from './number'
import {isPositiveInteger} from './numeric'
import string from './string'
import {initState, mergeState, validateSchema as _validateSchema} from './utils'

export function validateArray(schema: ArraySchema, path: string): State {
  let state = _validateSchema(
    'array',
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

  const {
    additionalItems,
    contains,
    items,
    maxItems,
    minItems,
    uniqueItems,
  } = schema

  if (additionalItems !== undefined) {
    if (typeof additionalItems !== 'boolean') {
      state.errors.push({
        message: 'additionalItems must be a boolean',
        path: `${path}.additionalItems`,
      })
    }

    if (!Array.isArray(items)) {
      state.warnings.push({
        message:
          'additionalItems should not be present when items is not an Array',
        path: `${path}.additionalItems`,
      })
    }
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
    if (typeof items !== 'object' || items === null) {
      state.errors.push({
        message: 'items must be a schema or Array of schemas',
        path: `${path}.items`,
      })
    } else {
      state = mergeState(state, validateSchema(items, `${path}.items`))
    }
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

  if (uniqueItems !== undefined && typeof uniqueItems !== 'boolean') {
    state.errors.push({
      message: 'uniqueItems must be a boolean',
      path: `${path}.uniqueItems`,
    })
  }

  return state
}

export function validateObject(schema: ObjectSchema, path: string): State {
  let state = _validateSchema(
    'object',
    schema,
    path,
    ['properties', 'type'],
    [
      'additionalProperties',
      'maxProperties',
      'minProperties',
      'patternProperties',
      'propertyNames',
      'required',
    ],
  )

  const {additionalProperties, properties} = schema

  if (additionalProperties !== undefined) {
    if (
      typeof additionalProperties === 'object' &&
      !Array.isArray(additionalProperties) &&
      additionalProperties !== null
    ) {
      state = validateSchema(
        additionalProperties,
        `${path}.additionalProperties`,
      )
    } else if (typeof additionalProperties !== 'boolean') {
      state.errors.push({
        message: 'additionalProperties must be a boolean or a schema',
        path: `${path}.additionalProperties`,
      })
    }
  }

  // TODO: validate maxProperties
  // TODO: validate minProperties
  // TODO: validate patternProperties

  if (properties !== undefined) {
    if (
      typeof properties !== 'object' ||
      Array.isArray(properties) ||
      properties === null
    ) {
      state.errors.push({
        message: 'properties must be an object',
        path: `${path}.properties`,
      })
    } else {
      state = Object.keys(properties).reduce(
        (accumulator: State, key: string): State =>
          mergeState(
            accumulator,
            validateSchema(properties[key], `${path}.properties.${key}`),
          ),
        state,
      )
    }
  }

  // TODO: validate propertyNames
  // TODO: validate required

  return state
}

const VALIDATORS = {
  array: validateArray,
  boolean,
  integer,
  null: nil,
  number,
  object: validateObject,
  string,
}

export default function validateSchema(
  schema: Schema,
  path?: string = '',
): State {
  if (typeof schema !== 'object' || Array.isArray(schema) || schema === null) {
    const state = initState()

    state.errors.push({
      message: 'schema must be an Object',
      path,
    })

    return state
  }

  if (schema.type in VALIDATORS) {
    // eslint-disable-next-line flowtype/no-weak-types
    return VALIDATORS[schema.type]((schema: any), path)
  }

  const state = initState()

  state.errors.push({
    message: `unknown type "${schema.type}"`,
    path: `${path}.type`,
  })

  return state
}
