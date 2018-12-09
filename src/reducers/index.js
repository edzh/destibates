import { combineReducers } from 'redux'
import {
  SET_SIDEBAR_VIEW,
  SET_SIDEBAR_DATE,
  SET_SIDEBAR_DATE_PART,
  SET_SIDEBAR_CATEGORY,
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES,
  RECEIVE_VODS,
  SET_VOD,
  REQUEST_TIMESTAMPS,
  RECEIVE_TIMESTAMPS,
  SET_TIMESTAMP,
  SET_TIMESTAMPS_BY_VOD
} from '../actions';

const initialState = {
  sidebar: {
    view: 'date',
    category: '',
    date: {
      currentPart: '',
      year: '',
      month: '',
      day: '',
    },
    vods: [],
    timestamps: [],
    categories: {
      isFetching: false,
      items: []
    }
  },
  vod: '',
  timestamp: '',
}

function sidebar(state = initialState.sidebar, action) {
  switch (action.type) {
    case SET_SIDEBAR_VIEW:
      return { ...state, view: action.view }
    case SET_SIDEBAR_DATE:
    case SET_SIDEBAR_DATE_PART:
      return { ...state, date: date(state.date, action) }
    case SET_SIDEBAR_CATEGORY:
      return { ...state, category: action.category }
    case RECEIVE_VODS:
      return { ...state, vods: action.vods }
    case REQUEST_CATEGORIES:
    case RECEIVE_CATEGORIES:
      return { ...state, categories: categories(state.categories, action) }
    case REQUEST_TIMESTAMPS:
    case RECEIVE_TIMESTAMPS:
      return { ...state, timestamps: timestamps(state.timestamps, action) }
    case SET_TIMESTAMPS_BY_VOD:
      return { ...state, timestamps: timestamps(state.timestamps, action) }
    default:
      return state
  }
}

function date(state, action) {
  switch (action.type) {
    case SET_SIDEBAR_DATE:
      return { ...state, [action.part]: action.value }
    case SET_SIDEBAR_DATE_PART:
      return { ...state, currentPart: action.part }
  }
}

function categories(state = { isFetching: false, items: [] }, action) {
  switch (action.type) {
    case REQUEST_CATEGORIES:
      return { ...state, isFetching: true }
    case RECEIVE_CATEGORIES:
      return {
        ...state,
        isFetching: false,
        items: action.items
      }
    default:
      return state

  }
}

function timestamps(state = {isFetching: false, items: []}, action) {
  switch (action.type) {
    case REQUEST_TIMESTAMPS:
      return { ...state, isFetching: true }
    case RECEIVE_TIMESTAMPS:
      return {
        ...state,
        isFetching: false,
        items: action.timestamps
      }
    case SET_TIMESTAMPS_BY_VOD:
      return {
        ...state,
        items: action.timestamps
      }
    default:
      return state
  }
}

function vod(state = initialState.vod, action) {
  switch (action.type) {
    case SET_VOD:
      return action.vod
    default:
      return state
  }
}

function timestamp(state = initialState.timestamp, action) {
  switch (action.type) {
    case SET_TIMESTAMP:
      return action.timestamp
    default:
      return state
  }
}

const vodApp = combineReducers({
  sidebar,
  vod,
  timestamp
})

export default vodApp;
