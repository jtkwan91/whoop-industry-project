import './HomePage.scss';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar.jsx';
import ProgressBar from '../../components/Progress/ProgressBar';
import React, { useState } from 'react';

function HomePage() {

    const [progress, setProgress] = useState(0);
    const [color, setColor] = useState('');

   
    return (
       <>
            <Header />
            <Navbar />
            <ProgressBar 
                progress={75}
                size={300}
                strokeWidth={15}
                circleOneStroke='#d9edfe'
                />
            <h2 className="day-strain">DAY STRAIN</h2>
            <h1 className="number">16.0</h1>
            <div className="activity">
                <p className="activity-text">1 ACTIVITY</p>
            </div>

        </>
    )
}

export default HomePage;


