/** @flow */

import type {IntegerSchema} from './types'
import {isInteger, isPositiveInteger} from './validators'

export default function integer(schema?: $Shape<IntegerSchema>): IntegerSchema {
  const finalSchema = {...schema, type: 'integer'}

  if ('maximum' in finalSchema) {
    if (!isInteger(finalSchema.maximum)) {
      throw new Error('maximum must be an integer')
    }

    if ('minimum' in finalSchema && finalSchema.maximum < finalSchema.minimum) {
      throw new Error('maximum cannot be less than minimum')
    }
  } else if ('exclusiveMaximum' in finalSchema) {
    throw new Error(
      'exclusiveMaximum should not be present when maximum is not',
    )
  }

  if ('minimum' in finalSchema) {
    if (!Number.isInteger(finalSchema.minimum)) {
      throw new Error('minimum must be an integer')
    }
  } else if ('exclusiveMinimum' in finalSchema) {
    throw new Error(
      'exclusiveMinimum should not be present when minimum is not',
    )
  }

  if (
    'multipleOf' in finalSchema &&
    !isPositiveInteger(finalSchema.multipleOf)
  ) {
    throw new Error('multipleOf must be a positive integer')
  }

  return finalSchema
}
