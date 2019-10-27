/** @flow */

import {anyOf, boolean, nil, string} from '../index'

describe('anyOf()', () => {
  it('should return expected object when called without arguments', () => {
    expect(anyOf()).toEqual({anyOf: []})
  })

  it('should return expected object when called with one argument', () => {
    expect(anyOf(boolean())).toEqual({anyOf: [{type: 'boolean'}]})
  })

  it('should return expected object when called with multiple arguments', () => {
    expect(anyOf(boolean(), nil(), string())).toEqual({
      anyOf: [{type: 'boolean'}, {type: 'null'}, {type: 'string'}],
    })
  })
})
