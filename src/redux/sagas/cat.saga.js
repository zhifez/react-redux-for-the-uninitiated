import { takeEvery, put, call } from 'redux-saga/effects';
import {
  GET_CAT_FACTS,
  CAT_FACTS_IS_LOADING,
  CAT_FACTS_LOAD_FAILED,
  CAT_FACTS_LOAD_SUCCESS
} from '../actions/cat.action';
import axios from 'axios';

export default function* rootSaga () {
  yield takeEvery ( GET_CAT_FACTS, getCatFacts );
}

function* getCatFacts () {
  try {
    yield put ( { type: CAT_FACTS_IS_LOADING } );

    let result = yield call ( axios.get, 'https://cat-fact.herokuapp.com/facts/random' );
    
    yield put ( { type: CAT_FACTS_LOAD_SUCCESS, data: result.data.text } );
  } catch ( e ) {
    yield put ( { type: CAT_FACTS_LOAD_FAILED, error: e.message } );
  }
}