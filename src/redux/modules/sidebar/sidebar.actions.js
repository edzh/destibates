import fetch from 'cross-fetch';

const url = "https://vodstiny.herokuapp.com/api"

export const SET_SIDEBAR_VIEW = 'SET_SIDEBAR_VIEW';
export function setSidebarView(view) {
  return {
    type: SET_SIDEBAR_VIEW,
    view
  }
}

export const SET_SIDEBAR_DATE = 'SET_SIDEBAR_DATE';
export function setSidebarDate(part, value) {
  return {
    type: SET_SIDEBAR_DATE,
    part,
    value
  }
}

export const SET_SIDEBAR_DATE_PART = 'SET_SIDEBAR_DATE_PART'
export function setSidebarDatePart(part) {
  return {
    type: SET_SIDEBAR_DATE_PART,
    part
  }
}

export const SET_SIDEBAR_CATEGORY = 'SET_SIDEBAR_CATEGORY';
export function setSidebarCategory(category) {
  return {
    type: SET_SIDEBAR_CATEGORY,
    category
  }
}

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
function requestCategories() {
  return {
    type: REQUEST_CATEGORIES
  }
}

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
function receiveCategories(json) {
  const results = [];
  const lookup = {};

  Object.keys(json).forEach(key => {
    if (!(json[key].category in lookup)) {
      lookup[json[key].category] = 1;
      results.push(json[key].category);
    }
  })
  results.sort();

  return {
    type: RECEIVE_CATEGORIES,
    items: results
  }
}

export function fetchCategories() {
  return dispatch => {
    dispatch(requestCategories())
    return fetch(`${url}/timestamps`)
      .then(response => response.json())
      .then(json => dispatch(receiveCategories(json)))
  }
}

export const REQUEST_TIMESTAMPS = 'REQUEST_TIMESTAMPS';
function requestTimestamps(filter, value) {
  return {
    type: REQUEST_TIMESTAMPS,
    filter,
    value
  }
}

export const RECEIVE_TIMESTAMPS = 'RECEIVE_TIMESTAMPS';
function receiveTimestamps(filter, value, json) {
  return {
    type: RECEIVE_TIMESTAMPS,
    filter,
    value,
    timestamps: json
  }
}

export function fetchTimestamps(filter, value) {
  return dispatch => {
    dispatch(requestTimestamps(filter, value))
    return fetch(`${url}/timestamps?${filter}=${value}`)
      .then(response => response.json())
      .then(json => dispatch(receiveTimestamps(filter, value, json)))
  }
}

export const SET_TIMESTAMPS_BY_VOD = 'SET_TIMESTAMPS_BY_VOD';
export function setTimestampsByVod (timestamps) {
  return {
    type: SET_TIMESTAMPS_BY_VOD,
    timestamps
  }
}

export const REQUEST_VODS = 'REQUEST_VODS';
function requestVods(filter, value) {
  return {
    type: REQUEST_VODS,
    filter,
    value
  }
}

export const RECEIVE_VODS = 'RECEIVE_VODS';
function receiveVods(filter, value, json) {
  return {
    type: RECEIVE_VODS,
    filter,
    value,
    vods: json
  }
}

export function fetchVods(filter, value) {
  return dispatch => {
    dispatch(requestVods(filter, value))
    return fetch(`${url}/vods?${filter}=${value}`)
      .then(response => response.json())
      .then(json => dispatch(receiveVods(filter, value, json)))
  }
}

export const SET_SIDEBAR_VOD = 'SET_SIDEBAR_VOD';
export function setSidebarVod(vod) {
  return {
    type: SET_SIDEBAR_VOD,
    vod
  }
}
