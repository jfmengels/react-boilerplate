import u from 'updeep'

import { createReducer } from '../../utils'
import { COUNTER_INCREMENT, COUNTER_DECREMENT } from '../constants'

const initialState = {
  count: 0
}

export default createReducer(initialState, {
  [COUNTER_INCREMENT]: (state, { amount }) => {
    return u({ count: (c) => c + amount }, state)
  },
  [COUNTER_DECREMENT]: (state, { amount }) => {
    return u({ count: (c) => c - amount }, state)
  }
})
