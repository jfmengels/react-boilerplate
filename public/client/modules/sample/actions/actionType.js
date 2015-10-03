import { SAMPLE_ACTION_TYPE } from '../constants'

const doAction = (message = 'please replace me') => {
  return {
    message,
    type: SAMPLE_ACTION_TYPE
  }
}

export default doAction
