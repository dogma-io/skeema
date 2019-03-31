/** @flow */

import type {State, IntegerSchema} from '../types'
import {isInteger, isPositiveInteger} from './numeric'
import {validateKeys} from './utils'

export default function validateInteger(
  schema: IntegerSchema,
  path: string,
): State {
  const state = validateKeys(
    schema,
    path,
    ['type'],
    [
      'exclusiveMaximum',
      'exclusiveMinimum',
      'maximum',
      'minimum',
      'multipleOf',
    ],
  )

  const {
    exclusiveMaximum,
    exclusiveMinimum,
    maximum,
    minimum,
    multipleOf,
  } = schema

  if (maximum !== undefined) {
    if (!isInteger(maximum)) {
      state.errors.push({
        message: 'maximum must be an integer',
        path: `${path}.maximum`,
      })
    } else if (minimum !== undefined && maximum < minimum) {
      state.errors.push({
        message: 'maximum cannot be less than minimum',
        path: `${path}.maximum`,
      })
    }
  } else if (exclusiveMaximum !== undefined) {
    state.warnings.push({
      message: 'exclusiveMaximum should not be present when maximum is not',
      path: `${path}.exclusiveMaximum`,
    })
  }

  if (minimum !== undefined) {
    if (!Number.isInteger(minimum)) {
      state.errors.push({
        message: 'minimum must be an integer',
        path: `${path}.minimum`,
      })
    }
  } else if (exclusiveMinimum !== undefined) {
    state.warnings.push({
      message: 'exclusiveMinimum should not be present when minimum is not',
      path: `${path}.exclusiveMinimum`,
    })
  }

  if (multipleOf !== undefined && !isPositiveInteger(multipleOf)) {
    state.errors.push({
      message: 'multipleOf must be a positive integer',
      path: `${path}.multipleOf`,
    })
  }

  return state
}
