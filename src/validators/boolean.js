/** @flow */

import type {BooleanSchema, State} from '../types'
import {initState} from './state'

export default function validateBoolean(
  schema: BooleanSchema,
  path: string,
): State {
  return initState()
}
