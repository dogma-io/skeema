/** @flow */

import type {ObjectSchema} from './types'

export default function object(
  schema?: $Diff<ObjectSchema, {|type: 'object'|}>,
): ObjectSchema {
  return {...schema, type: 'object'}
}
