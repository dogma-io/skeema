/** @flow */

import {boolean, not} from '../index'

describe('not()', () => {
  it('should return expected object', () => {
    expect(not(boolean())).toEqual({not: {type: 'boolean'}})
  })
})
