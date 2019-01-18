import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga'
import { helloWorldSaga }  from '../sagas/helloWorldSaga';
import { putTest } from "../actions/test";

export default function configureStore() {

  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );

  sagaMiddleware.run(helloWorldSaga)

  store.dispatch(putTest("Hello!"))
  console.log(store.getState())
  
  store.dispatch(putTest("Hello 2!"))
  console.log(store.getState())

  return store;
}