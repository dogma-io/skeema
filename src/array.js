/** @flow */

import type {ArraySchema} from './types'
import {isPositiveInteger} from './validators'

export default function array(schema?: $Shape<ArraySchema>): ArraySchema {
  const finalSchema = {...schema, type: 'array'}

  if ('contains' in finalSchema && 'items' in finalSchema) {
    throw new Error('contains should not be present when items is present')
  }

  if ('maxItems' in finalSchema) {
    if (!isPositiveInteger(finalSchema.maxItems)) {
      throw new Error('maxItems must be a positive integer')
    }

    if (
      'minItems' in finalSchema &&
      finalSchema.maxItems < finalSchema.minItems
    ) {
      throw new Error('maxItems cannot be less than minItems')
    }
  }

  if ('minItems' in finalSchema) {
    if (!isPositiveInteger(finalSchema.minItems)) {
      throw new Error('minItems must be a positive integer')
    }
  }

  return finalSchema
}
