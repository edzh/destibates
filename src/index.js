import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import vodApp from './reducers';
import App from './App';
import './index.css'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  vodApp,
  applyMiddleware(thunkMiddleware)
);

store.subscribe(() => console.log(store.getState()))
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
