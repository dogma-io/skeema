/** @flow */

import type {State, NumberSchema} from '../types'
import {isPositive} from './numeric'
import {initState} from './state'

export default function validateNumber(
  schema: NumberSchema,
  path: string,
): State {
  const state = initState()
  const {
    exclusiveMaximum,
    exclusiveMinimum,
    maximum,
    minimum,
    multipleOf,
  } = schema

  if (maximum !== undefined) {
    if (minimum !== undefined && maximum < minimum) {
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

  if (exclusiveMinimum !== undefined && minimum === undefined) {
    state.warnings.push({
      message: 'exclusiveMinimum should not be present when minimum is not',
      path: `${path}.exclusiveMinimum`,
    })
  }

  if (multipleOf !== undefined && !isPositive(multipleOf)) {
    state.errors.push({
      message: 'multipleOf must be a positive number',
      path: `${path}.multipleOf`,
    })
  }

  return state
}
