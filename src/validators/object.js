/** @flow */

import type {State, ObjectSchema} from '../types'
import {initState} from './state'

export default function validateObject(
  schema: ObjectSchema,
  path: string,
): State {
  return initState()
}
