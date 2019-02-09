import { SET_TIMESTAMP } from './timestamp.actions';

const initialState = '';

export default function timestamp(state = initialState, action) {
  switch (action.type) {
    case SET_TIMESTAMP:
      return action.timestamp
    default:
      return state
  }
}
