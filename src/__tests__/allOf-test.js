/** @flow */

import {allOf, boolean, nil, string} from '../index'

describe('allOf()', () => {
  it('should return expected object when called without arguments', () => {
    expect(allOf()).toEqual({allOf: []})
  })

  it('should return expected object when called with one argument', () => {
    expect(allOf(boolean())).toEqual({allOf: [{type: 'boolean'}]})
  })

  it('should return expected object when called with multiple arguments', () => {
    expect(allOf(boolean(), nil(), string())).toEqual({
      allOf: [{type: 'boolean'}, {type: 'null'}, {type: 'string'}],
    })
  })
})
