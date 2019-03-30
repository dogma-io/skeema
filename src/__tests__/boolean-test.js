/** @flow */

import boolean from '../boolean'

describe('boolean()', () => {
  it('should return expected object when called without arguments', () => {
    expect(boolean()).toEqual({type: 'boolean'})
  })
})
