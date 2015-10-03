import { COUNTER_INCREMENT } from '../constants'

export default (amount = 1) => {
  return {
    amount,
    type: COUNTER_INCREMENT
  }
}
