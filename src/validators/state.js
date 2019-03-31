/** @flow */

import type {State} from '../types'

export function initState(): State {
  return {
    errors: [],
    warnings: [],
  }
}

export function mergeState(...states: Array<State>): State {
  return states.reduce(
    (accumulator: State, currentValue: State): State => ({
      errors: accumulator.errors.concat(currentValue.errors),
      warnings: accumulator.warnings.concat(currentValue.warnings),
    }),
    initState(),
  )
}
