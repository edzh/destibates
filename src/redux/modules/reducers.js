import { combineReducers } from 'redux'
import timestamp from './timestamp/timestamp.reducers';
import sidebar from './sidebar/sidebar.reducers';
import vod from './vod/vod.reducers';

// export const initialState = {
//   sidebar: {},
//   vod: '',
//   timestamp: '',
//   nowPlaying: {
//     details: {
//       topic: '',
//       category: '',
//       timestamp: '',
//       vodId: '',
//       date: '',
//     },
//     playing: true,
//     volume: 100,
//     seek: 0
//   }
// }

const vodApp = combineReducers({
  sidebar,
  vod,
  timestamp
})

export default vodApp;
