/** @flow */

import type {StringSchema} from './types'
import {isPositiveInteger} from './validators'

export default function string(schema?: $Shape<StringSchema>): StringSchema {
  const finalSchema = {...schema, type: 'string'}

  if ('maxLength' in finalSchema) {
    if (!isPositiveInteger(finalSchema.maxLength)) {
      throw new Error('maxLength must be a positive integer')
    }

    if (
      'minLength' in finalSchema &&
      finalSchema.maxLength < finalSchema.minLength
    ) {
      throw new Error('maxLength cannot be less than minLength')
    }
  }

  if ('minLength' in finalSchema && !isPositiveInteger(finalSchema.minLength)) {
    throw new Error('minLength must be a positive integer')
  }

  return finalSchema
}
