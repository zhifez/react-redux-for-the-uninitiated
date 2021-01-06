import { combineReducers } from 'redux';
import todoReducer from './todo.reducer';
import ratingReducer from './rating.reducer';

export default combineReducers ( {
  todoReducer,
  ratingReducer
} );