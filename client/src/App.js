import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import BreathingCircle from './components/Header/BreathingCircle/BreathingCircle'
import Header from './components/Header/Header'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Header />
        <Switch>
          <Route path='/breathe' component={BreathingCircle}/>
          <Route />
        </Switch>
      </BrowserRouter>
    )
  }
}
