/** @flow */

import type {BooleanSchema, State} from '../types'
import {validateKeys} from './utils'

export default function validateBoolean(
  schema: BooleanSchema,
  path: string,
): State {
  return validateKeys(schema, path, ['type'])
}
