import { connect } from 'react-redux';

import {
  setDetails,
}

import NowPlaying from '../components/Player/NowPlaying';

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {
  dispatch(setDetails)
}
