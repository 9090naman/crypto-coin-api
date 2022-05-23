import { createStore, applyMiddleware } from 'redux';
// import { configureStore as createStore } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core';
import Rootreducer from './redux/reducers/RootReducer';
import RootSaga from './redux/sagas/RootSaga'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(Rootreducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(RootSaga);

export default store;