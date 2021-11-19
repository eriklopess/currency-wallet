import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import store from './store/store';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={ store }>
          <Switch>
            <Route exact path="/" component={ Login } />
          </Switch>
        </Provider>
      </BrowserRouter>
    );
  }
}
