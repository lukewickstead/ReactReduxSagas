import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Page1  from './containers/Page1';
import Page2  from './containers/Page2';

import './App.css';

class App extends Component {
  render() {

    const store = this.props.store;

    return (
      <Provider store={store}>
        <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Page1} />
          <Route path="/One" exact component={Page1} />
          <Route path="/Two" exact component={Page2} />
        </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
