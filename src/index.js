import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import { putTest } from "./actions/test";
import configureStore from './store/configureStore';

const store = configureStore();

render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(putTest("Hello!"))
console.log(store.getState())

store.dispatch(putTest("Hello 2!"))
console.log(store.getState())
