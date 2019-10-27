/** @flow */

import type {NullSchema, State} from '../types'
import {validateSchema} from './utils'

export default function validateNull(schema: NullSchema, path: string): State {
  return validateSchema('null', schema, path, ['type'])
}
