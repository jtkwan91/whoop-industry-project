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
                progress={60}
                size={500}
                strokeWidth={15}
                circleOneStroke='#d9edfe'
                circleTwoStroke='#7ea9e1'/>
        </>
    )
}

export default HomePage;


