import { connect } from 'react-redux';

import {
  fetchTimestamps,
  setTimestampsByVod,
  setSidebarVod
} from '../actions'

import VodList from '../components/Sidebar/VodList';

const mapStateToProps = (state) => {
  return {
    vod: state.vod,
    currentVod: state.sidebar.vod,
    timestamp: state.timestamp,
    timestamps: state.sidebar.timestamps.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTimestamps: (filter, vodId) => {
      dispatch(fetchTimestamps(filter, vodId))
    },
    setTimestampsByVod: (timestamps) => {
      dispatch(setTimestampsByVod(timestamps))
    },
    onVodClick: (vod) => {
      dispatch(setSidebarVod(vod))
    }
  }
}

const VodContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VodList);

export default VodContainer;
