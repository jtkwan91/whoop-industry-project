import './HomePage.scss';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar.jsx';
import ProgressBar from '../../components/Progress/ProgressBar';
import React from 'react';

function HomePage() {

let strain = 16
  
       return (
       <>
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

        </>
    )
}

export default HomePage;


