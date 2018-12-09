import { connect } from 'react-redux';

import Player from '../components/Player/Player';

const mapStateToProps = (state) => {
  return {
    timestamp: state.timestamp,
    vod: state.vod
  }
}

const PlayerContainer = connect(
  mapStateToProps
)(Player);

export default PlayerContainer;
