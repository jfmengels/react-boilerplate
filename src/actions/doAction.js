import { ACTION_TYPE } from '../actionTypes';

export function doAction(message='please replace me') {
  return {
    type: ACTION_TYPE,
    message
  };
}
