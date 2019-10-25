import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import { fileUploadSaga } from './fileUploadSaga';
import { messagesSaga } from './messagesSaga';
import { acceptEulaSaga, declineEulaSaga } from './eulaSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(combineReducers(reducers), applyMiddleware(sagaMiddleware));

store.subscribe(() => console.warn('STORE:', store.getState()));

sagaMiddleware.run(fileUploadSaga);
sagaMiddleware.run(messagesSaga);
sagaMiddleware.run(acceptEulaSaga);
// sagaMiddleware.run(declineEulaSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
