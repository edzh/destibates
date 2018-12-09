import { connect } from 'react-redux';

import {
  setVod,
  fetchTimestamps,
  setTimestampsByVod
} from '../actions'

import VodList from '../components/Sidebar/VodList';

const mapStateToProps = (state) => {
  return {
    vod: state.vod,
    timestamp: state.timestamp,
    timestamps: state.sidebar.timestamps.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onVodClick: vod => {
      dispatch(setVod(vod))
    },
    fetchTimestamps: (filter, vodId) => {
      dispatch(fetchTimestamps(filter, vodId))
    },
    setTimestampsByVod: (timestamps) => {
      dispatch(setTimestampsByVod(timestamps))
    }
  }
}

const VodContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VodList);

export default VodContainer;
