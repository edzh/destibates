import { createStore } from 'redux';
import timestampApp from '../reducers';

export const store = createStore(timestampApp)
