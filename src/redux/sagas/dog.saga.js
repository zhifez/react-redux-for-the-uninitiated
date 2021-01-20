import { takeEvery, put, call } from 'redux-saga/effects';
import {
  GET_RANDOM_DOG,
  RANDOM_DOG_IS_LOADING,
  RANDOM_DOG_LOAD_FAILED,
  RANDOM_DOG_LOAD_SUCCESS
} from '../actions/dog.action';
import axios from 'axios';

export default function* rootSaga () {
  yield takeEvery ( GET_RANDOM_DOG, getRandomDog );
}

function* getRandomDog () {
  try {
    yield put ( { type: RANDOM_DOG_IS_LOADING } );

    let result = yield call ( axios.get, 'https://dog.ceo/api/breeds/image/random' );
    
    yield put ( { type: RANDOM_DOG_LOAD_SUCCESS, data: result.data.message } );
  } catch ( e ) {
    yield put ( { type: RANDOM_DOG_LOAD_FAILED, error: e.message } );
  }
}