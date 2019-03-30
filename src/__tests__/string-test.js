/** @flow */

import string from '../string'

describe('string()', () => {
  it('should return expected object when called without arguments', () => {
    expect(string()).toEqual({type: 'string'})
  })
})
