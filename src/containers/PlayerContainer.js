import { connect } from 'react-redux';

import { setTimestamp } from '../redux/modules/timestamp/timestamp.actions';
import { setVod } from '../redux/modules/vod/vod.actions';
import Player from '../components/Player/Player';

const mapStateToProps = (state, ownProps) => {
  return {
    timestamp: state.timestamp,
    vodId: state.vod,
    timestampId: ownProps.timestampId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTimestamp: (vod, timestamp) => {
      dispatch(setVod(vod));
      dispatch(setTimestamp(timestamp));
    }
  }
}

const PlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player);

export default PlayerContainer;
