/** @flow */

import type {ArraySchema, State} from '../types'
import {isPositiveInteger} from './numeric'
import {initState} from './state'

export default function validateArray(
  schema: ArraySchema,
  path: string,
): State {
  const state = initState()
  const {maxItems, minItems} = schema

  if ('contains' in schema && 'items' in schema) {
    state.warnings.push({
      message: 'contains should not be present when items is present',
      path: `${path}.contains`,
    })
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
