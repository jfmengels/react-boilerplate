import { createReducer } from 'redux-immutablejs'

import { COUNTER_INCREMENT, COUNTER_DECREMENT } from '../constants'

const initialState = {
  count: 0
}

export default createReducer(initialState, {
  [COUNTER_INCREMENT]: (state, { amount }) => {
    return state.update('count', (count) => count + amount)
  },
  [COUNTER_DECREMENT]: (state, { amount }) => {
    return state.update('count', (count) => count - amount)
  }
})
