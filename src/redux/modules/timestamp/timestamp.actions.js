export const SET_TIMESTAMP = 'SET_TIMESTAMP'
export function setTimestamp(timestamp) {
  return {
    type: SET_TIMESTAMP,
    timestamp
  }
}

export const SET_NOW_PLAYING_TIMESTAMP = 'SET_NOW_PLAYING_TIMESTAMP';
export function setNowPlayingTimestamp(timestamp) {
  return {
    type: SET_NOW_PLAYING_TIMESTAMP,
    timestamp
  }
}
