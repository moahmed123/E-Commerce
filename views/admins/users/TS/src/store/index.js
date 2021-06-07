import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers';
import thunk from "redux-thunk" 

import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware, thunk )));
// const store = createStore(
//     rootReducer,
//     applyMiddleware(thunk)

//   );

sagaMiddleware.run(rootSaga);

export default store;