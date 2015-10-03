import { COUNTER_INCREMENT, COUNTER_DECREMENT } from '../constants'

const initialState = {
  count: 0
}

export default (state = initialState, action) => {
  let count
  switch (action.type) {
    case COUNTER_INCREMENT:
      count = state.count + action.amount
      return { ...state, count }
    case COUNTER_DECREMENT:
      count = state.count - action.amount
      return { ...state, count }
    default:
      return state
  }
}
