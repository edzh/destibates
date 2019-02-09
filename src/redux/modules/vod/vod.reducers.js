import { SET_VOD } from './vod.actions';

const initialState = ''

export default function vod(state = initialState, action) {
  switch (action.type) {
    case SET_VOD:
      return action.vod
    default:
      return state
  }
}
