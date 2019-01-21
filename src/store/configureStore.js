import rootReducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux';

import watchNasaPictureOfDay  from '../sagas/nasaPictureOfTheDaySaga';

export default function configureStore() {

  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );

  sagaMiddleware.run(watchNasaPictureOfDay)

  return store;
}