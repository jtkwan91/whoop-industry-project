import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import BreathingCircle from './pages/BreathingPage/BreathingPage'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'

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
