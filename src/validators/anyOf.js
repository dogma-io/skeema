/** @flow */

import type {AnyOfSchema, State} from '../types'
import {validateSchema} from './utils'

export default function validateAnyOf(
  schema: AnyOfSchema,
  path: string,
): State {
  const state = validateSchema(undefined, schema, path, ['anyOf'])

  if (!Array.isArray(schema.anyOf)) {
    state.errors.push({
      message: 'anyOf must be an array',
      path: `${path}.anyOf`,
    })
  }

  return state
}
