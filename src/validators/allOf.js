/** @flow */

import type {AllOfSchema, State} from '../types'
import {validateSchema} from './utils'

export default function validateAllOf(
  schema: AllOfSchema,
  path: string,
): State {
  const state = validateSchema(undefined, schema, path, ['allOf'])

  if (!Array.isArray(schema.allOf)) {
    state.errors.push({
      message: 'allOf must be an array',
      path: `${path}.allOf`,
    })
  }

  return state
}
