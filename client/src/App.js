import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Header />
      <Navbar />
        <Switch>
          <Route />
          <Route />
        </Switch>
      </BrowserRouter>
    )
  }
}
