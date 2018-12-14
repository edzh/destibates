import { connect } from 'react-redux';

import {
  setVod,
  setTimestamp,
  fetchTimestamps
} from '../actions'

import TimestampList from '../components/Sidebar/TimestampList';

const mapStateToProps = (state) => {
  return {
    vod: state.vod,
    timestamp: state.timestamp,
    timestamps: state.sidebar.timestamps.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTimestampClick: (vod, timestamp) => {
      dispatch(setVod(vod));
      dispatch(setTimestamp(timestamp));
    },
    fetchTimestamps: (filter, vodId) => {
      dispatch(fetchTimestamps(filter, vodId))
    }
  }
}

const TimestampContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TimestampList);

export default TimestampContainer;
