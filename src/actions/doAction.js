import { ACTION_TYPE } from '../actionTypes'

export const doAction = (message = 'please replace me') => {
  return {
    message,
    type: ACTION_TYPE
  }
}
