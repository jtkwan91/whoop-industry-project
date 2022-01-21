import './HomePage.scss';
import { Component } from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar.jsx';
import ProgressBar from '../../components/Progress/ProgressBar';
import BreatheCard from '../../components/BreatheCard/BreatheCard';
import StrainCard from "../../components/StrainCard/StrainCard";
import React, { useState } from 'react';

export default class HomePage extends Component {
    state = {
        isBreatheCard: true,
    }

    handleClick = () => {
        const change = !this.state.isBreatheCard
        this.setState({isBreatheCard: change})
    }

  render() {
    let strain = 10.1
    return(
        <div>
            <Header />
            <Navbar />
            <ProgressBar 
                progress={strain / 21 * 100
                }
                size={300}
                strokeWidth={15}
                circleOneStroke='#d9edfe'
                />
            <h2 className="day-strain">DAY STRAIN</h2>
            <div className="number-container">
                <h1 className='number'>
                {strain}
                </h1>
                </div>
            <div className="activity">
                <p className="activity-text">1 ACTIVITY</p>
            </div>
            {this.state.isBreatheCard 
                ? <BreatheCard 
                    title={"Breathwork Challenge"}
                    text={"Often forgotten, but synchronized breathing can help you relax instantly!"}
                    handleClick={this.handleClick}/> 
                : <StrainCard
                    title={"Optimal Strain"}
                    text={"You're at a balanced level of Strain for today. Going above 18.9 will promote fitness gains but may diminish your body’s ability to recover fully overnight. "}
                    handleClick={this.handleClick}/>}
        </div>
        )
  }
};


