// import { initialState } from './reducers';
import {
  SET_SIDEBAR_VIEW,
  SET_SIDEBAR_DATE,
  SET_SIDEBAR_DATE_PART,
  SET_SIDEBAR_CATEGORY,
  REQUEST_VODS,
  RECEIVE_VODS,
  REQUEST_CATEGORIES,
  RECEIVE_CATEGORIES,
  REQUEST_TIMESTAMPS,
  RECEIVE_TIMESTAMPS,
  SET_TIMESTAMPS_BY_VOD,
  SET_SIDEBAR_VOD
} from './sidebar.actions';

export const initialState = {
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
}

export default function sidebar(state = initialState, action) {
  switch (action.type) {
    case SET_SIDEBAR_VIEW:
      return { ...state, view: action.view }
    case SET_SIDEBAR_DATE:
    case SET_SIDEBAR_DATE_PART:
      return { ...state, date: date(state.date, action) }
    case SET_SIDEBAR_CATEGORY:
      return { ...state, category: action.category }
    case REQUEST_VODS:
    case RECEIVE_VODS:
      return { ...state, vods: vods(state.vods, action) }
    case REQUEST_CATEGORIES:
    case RECEIVE_CATEGORIES:
      return { ...state, categories: categories(state.categories, action) }
    case REQUEST_TIMESTAMPS:
    case RECEIVE_TIMESTAMPS:
      return { ...state, timestamps: timestamps(state.timestamps, action) }
    case SET_TIMESTAMPS_BY_VOD:
      return { ...state, timestamps: timestamps(state.timestamps, action) }
    case SET_SIDEBAR_VOD:
      return { ...state, vod: action.vod }
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
    default:
      return state
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

function vods(state = { isFetching: false, items: []}, action) {
  switch (action.type) {
    case REQUEST_VODS:
      return { ...state, isFetching: true }
    case RECEIVE_VODS:
      return { ...state, isFetching: false, items: action.vods }
    default:
      return state
  }
}

