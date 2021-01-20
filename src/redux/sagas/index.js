import { all } from 'redux-saga/effects';
import catSaga from './cat.saga';
import dogSaga from './dog.saga';

export default function* rootSaga () {
  yield all ( [
    catSaga (),
    dogSaga ()
  ] );
}