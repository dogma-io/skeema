/** @flow */

import type {BooleanSchema} from './types'

export default function boolean(schema?: $Shape<BooleanSchema>): BooleanSchema {
  return {...schema, type: 'boolean'}
}
