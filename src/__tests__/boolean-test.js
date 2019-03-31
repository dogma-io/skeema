/** @flow */

import {boolean} from '../index'

describe('boolean()', () => {
  it('should return expected object when called without arguments', () => {
    expect(boolean()).toEqual({type: 'boolean'})
  })

  it('should throw error when unknown properties included', () => {
    expect(() => {
      boolean(({foo: 'bar'}: any))
    }).toThrow('unknown key "foo"')
  })
})
