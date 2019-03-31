/** @flow */

import type {Schema, State} from '../types'
import array from './array'
import boolean from './boolean'
import integer from './integer'
import number from './number'
import object from './object'
import string from './string'
import {initState} from './state'

const VALIDATORS = {array, boolean, integer, number, object, string}

export function validateSchema(schema: Schema, path?: string = ''): State {
  if (schema.type in VALIDATORS) {
    // eslint-disable-next-line flowtype/no-weak-types
    return VALIDATORS[schema.type]((schema: any), path)
  }

  const state = initState()

  state.errors.push({
    message: `Unknown type "${schema.type}"`,
    path: `${path}.type`,
  })

  return state
}
