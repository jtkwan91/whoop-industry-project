import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import BreathingCircle from './pages/BreathingPage/BreathingPage'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import BreatheCard from './components/BreatheCard/BreatheCard';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Header />
      <Navbar />
      <BreatheCard />
        <Switch>
          <Route path='/breathe' component={BreathingCircle}/>
          <Route />
        </Switch>
      </BrowserRouter>
    )
  }
}
