import { createStore, combineReducers } from 'redux';
import todos from './ducks/todos';

const store = createStore(combineReducers({todos}));

export default store;

