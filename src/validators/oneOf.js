/** @flow */

import type {OneOfSchema, State} from '../types'
import {validateSchema} from './utils'

export default function validateOneOf(
  schema: OneOfSchema,
  path: string,
): State {
  const state = validateSchema(undefined, schema, path, ['oneOf'])

  if (!Array.isArray(schema.oneOf)) {
    state.errors.push({
      message: 'oneOf must be an array',
      path: `${path}.oneOf`,
    })
  }

  return state
}
