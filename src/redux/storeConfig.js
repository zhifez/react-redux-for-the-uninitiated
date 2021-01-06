import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware ();

export default function configureStore ( initialState ) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore (
    rootReducer,
    initialState,
    composeEnhancers ( applyMiddleware ( sagaMiddleware ) )
  );
  sagaMiddleware.run ( rootSaga );
  return store;
}