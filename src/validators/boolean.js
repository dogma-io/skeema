/** @flow */

import type {BooleanSchema, State} from '../types'
import {validateSchema} from './utils'

export default function validateBoolean(
  schema: BooleanSchema,
  path: string,
): State {
  return validateSchema('boolean', schema, path, ['type'])
}
