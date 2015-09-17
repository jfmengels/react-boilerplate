import { ACTION_TYPE } from '../actionTypes';

const initialState = {
};

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case ACTION_TYPE:
      console.log(action.message);
      return { ...state };
    default:
      return state;
  }
}
