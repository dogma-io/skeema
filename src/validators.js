/** @flow */

export function isInteger(value: number): boolean {
  return Number.isInteger(value)
}

export function isPositive(value: number): boolean {
  return value >= 0
}

export function isPositiveInteger(value: number): boolean {
  return isInteger(value) && isPositive(value)
}
