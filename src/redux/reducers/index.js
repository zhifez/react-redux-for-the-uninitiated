import { combineReducers } from 'redux';
import todoReducer from './todo.reducer';
import ratingReducer from './rating.reducer';
import catReducer from './cat.reducer';
import dogReducer from './dog.reducer';

export default combineReducers ( {
  todoReducer,
  ratingReducer,
  catReducer,
  dogReducer
} );