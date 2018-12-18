import { connect } from 'react-redux';

import {
  setVod,
  setTimestamp,
} from '../actions'

import Timestamp from '../components/Sidebar/Timestamp';

const mapStateToProps = (state) => {
  return {
    currentVod: state.vod,
    currentTimestamp: state.timestamp,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTimestampClick: (vod, timestamp) => {
      dispatch(setVod(vod));
      dispatch(setTimestamp(timestamp));
    }
  }
}

const TimestampContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Timestamp);

export default TimestampContainer;
