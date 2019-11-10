/** @flow */

import type {NotSchema, State} from '../types'
import {validateSchema} from './utils'

export default function validateNot(schema: NotSchema, path: string): State {
  return validateSchema(undefined, schema, path, ['not'])
}
