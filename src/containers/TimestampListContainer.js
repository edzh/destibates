import { connect } from 'react-redux';

import {
  setVod,
  setTimestamp,
  fetchTimestamps
} from '../actions'

import TimestampList from '../components/Sidebar/TimestampList';

const mapStateToProps = (state) => {
  return {
    timestamps: state.sidebar.timestamps.items
  }
}

const TimestampListContainer = connect(
  mapStateToProps
)(TimestampList);

export default TimestampListContainer;
