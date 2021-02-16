import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './redux/reducers';
import rootSagas from './redux/sagas';

const sagaMiddleware = createSagaMiddleware ();
const store = createStore ( rootReducers, applyMiddleware ( sagaMiddleware ) );
sagaMiddleware.run ( rootSagas );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);