import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NasaPictureOfTheDay  from './containers/nasaPictureOfTheDay';

class App extends Component {
  render() {

    const store = this.props.store;

    return (
      <Provider store={store}>
        <BrowserRouter>
        <Switch>
          <Route path="/" exact component={NasaPictureOfTheDay} />
          <Route path="/NasaPictureOfTheDay" exact component={NasaPictureOfTheDay} />
        </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
