import { COUNTER_DECREMENT } from '../constants'

export default (amount = 1) => {
  return {
    amount,
    type: COUNTER_DECREMENT
  }
}
