/** @flow */

import {number} from '../index'

describe('number()', () => {
  it('should return expected object when called without arguments', () => {
    expect(number()).toEqual({type: 'number'})
  })

  it('should return expected object when options are provided', () => {
    expect(
      number({
        exclusiveMaximum: true,
        exclusiveMinimum: true,
        maximum: 10.5,
        minimum: 0.5,
        multipleOf: 0.5,
      }),
    ).toEqual({
      exclusiveMaximum: true,
      exclusiveMinimum: true,
      maximum: 10.5,
      minimum: 0.5,
      multipleOf: 0.5,
      type: 'number',
    })
  })

  it('should throw error when unknown properties included', () => {
    expect(() => {
      number(({foo: 'bar'}: any))
    }).toThrow('unknown key "foo"')
  })

  it('should throw when exclusiveMaximum is present and maximum is not', () => {
    expect(() => {
      number({exclusiveMaximum: true})
    }).toThrow('exclusiveMaximum should not be present when maximum is not')
  })

  it('should throw when exclusiveMinimum is present and minimum is not', () => {
    expect(() => {
      number({exclusiveMinimum: true})
    }).toThrow('exclusiveMinimum should not be present when minimum is not')
  })

  it('should throw when maximum is less than minimum', () => {
    expect(() => {
      number({maximum: 1, minimum: 2})
    }).toThrow('maximum cannot be less than minimum')
  })

  it('should throw when multipleOf is a negative number', () => {
    expect(() => {
      number({multipleOf: -1})
    }).toThrow('multipleOf must be a positive number')
  })
})
