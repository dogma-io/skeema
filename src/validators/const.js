/** @flow */

import type {ConstSchema, State} from '../types'
import {validateSchema} from './utils'

export default function validateConst(
  schema: ConstSchema,
  path: string,
): State {
  return validateSchema(undefined, schema, path, ['const'])
}
