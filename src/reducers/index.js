import { combineReducers } from 'redux';
import games from './games';
import todos from './todo';

const rootReducer = combineReducers({
  games,
  todos
});

export default rootReducer;
