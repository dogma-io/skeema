/** @flow */

import type {State, ObjectSchema} from '../types'
import {validateKeys} from './utils'

export default function validateObject(
  schema: ObjectSchema,
  path: string,
): State {
  return validateKeys(
    schema,
    path,
    ['properties', 'type'],
    [
      'additionalProperties',
      'maxProperties',
      'minProperties',
      'patternProperties',
      'propertyNames',
      'required',
    ],
  )
}
