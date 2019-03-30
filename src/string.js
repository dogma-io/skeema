/** @flow */

import type {StringSchema} from './types'

export default function string(schema?: $Shape<StringSchema>): StringSchema {
  return {...schema, type: 'string'}
}
