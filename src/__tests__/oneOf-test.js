/** @flow */

import {boolean, nil, oneOf, string} from '../index'

describe('oneOf()', () => {
  it('should return expected object when called without arguments', () => {
    expect(oneOf()).toEqual({oneOf: []})
  })

  it('should return expected object when called with one argument', () => {
    expect(oneOf(boolean())).toEqual({oneOf: [{type: 'boolean'}]})
  })

  it('should return expected object when called with multiple arguments', () => {
    expect(oneOf(boolean(), nil(), string())).toEqual({
      oneOf: [{type: 'boolean'}, {type: 'null'}, {type: 'string'}],
    })
  })
})
