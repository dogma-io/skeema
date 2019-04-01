/** @flow */

import type {State, ObjectSchema} from '../types'
import {validateSchema} from './utils'

export default function validateObject(
  schema: ObjectSchema,
  path: string,
): State {
  return validateSchema(
    'object',
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
