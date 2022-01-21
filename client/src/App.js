import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import BreathingCircle from './pages/BreathingPage/BreathingPage'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/breathe' component={BreathingCircle}/>
          <Route />
        </Switch>
      </BrowserRouter>
    )
  }
}
