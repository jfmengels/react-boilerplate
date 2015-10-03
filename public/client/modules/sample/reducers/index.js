import { SAMPLE_ACTION_TYPE } from '../constants'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAMPLE_ACTION_TYPE:
      console.log(action.message)
      return { ...state }
    default:
      return state
  }
}

export default reducer
