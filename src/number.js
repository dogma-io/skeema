/** @flow */

import type {NumberSchema} from './types'
import {isPositive} from './validators'

export default function number(schema?: $Shape<NumberSchema>): NumberSchema {
  const finalSchema = {...schema, type: 'number'}

  if ('maximum' in finalSchema) {
    if ('minimum' in finalSchema && finalSchema.maximum < finalSchema.minimum) {
      throw new Error('maximum cannot be less than minimum')
    }
  } else if ('exclusiveMaximum' in finalSchema) {
    throw new Error(
      'exclusiveMaximum should not be present when maximum is not',
    )
  }

  if ('exclusiveMinimum' in finalSchema && !('minimum' in finalSchema)) {
    throw new Error(
      'exclusiveMinimum should not be present when minimum is not',
    )
  }

  if ('multipleOf' in finalSchema && !isPositive(finalSchema.multipleOf)) {
    throw new Error('multipleOf must be a positive number')
  }

  return finalSchema
}
