import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/sagas';
import { Provider } from 'react-redux';
import rootReducers from './redux/reducers';

const sagaMiddleware = createSagaMiddleware ();
const store = createStore ( rootReducers, applyMiddleware ( sagaMiddleware ) );
sagaMiddleware.run ( rootSaga );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);