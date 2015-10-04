import { expect } from 'chai'
import { Map as ImmMap } from 'immutable'

import reducer from '../../../public/client/modules/counter/reducers'
import increment from '../../../public/client/modules/counter/actions/increment'
import decrement from '../../../public/client/modules/counter/actions/decrement'

describe('counter reducer', () => {
  let state

  beforeEach(() => {
    state = reducer(undefined, { type: '@@INIT' })
  })

  it('should have count equal to 0 as the initial state', () => {
    expect(state).to.equal(ImmMap({
      count: 0
    }))
  })

  it('should return current state when action type is undefined', () => {
    // Ensures as best as it can that no action in the reducer equals undefined, meaning no type was misspelled
    const nextState = reducer(state, { type: undefined })
    expect(nextState).to.equal(state)
  })

  describe('on increment', () => {
    it('should increment count when given increment action', () => {
      const nextState = reducer(state, increment())
      expect(nextState).to.equal(ImmMap({
        count: 1
      }))
    })

    it('should increment count when given increment action with a specific amount', () => {
      const nextState = reducer(state, increment(5))
      expect(nextState).to.equal(ImmMap({
        count: 5
      }))
    })
  })

  describe('on decrement', () => {
    it('should decrement count when given decrement action', () => {
      const nextState = reducer(state, decrement())
      expect(nextState).to.equal(ImmMap({
        count: -1
      }))
    })

    it('should decrement count when given decrement action with a specific amount', () => {
      const nextState = reducer(state, decrement(5))
      expect(nextState).to.equal(ImmMap({
        count: -5
      }))
    })
  })
})

