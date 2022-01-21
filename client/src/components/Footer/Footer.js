import React from 'react';
import './Footer.scss'
import home from '../../assets/images/home.svg';
import clipboard from '../../assets/images/clipboard.svg';
import camera from '../../assets/images/camera.svg';
import connect from '../../assets/images/connect.svg';
import menu from '../../assets/images/menu.svg';

function Footer() {
    return (
        <div className='footer'>
            <div className="footer__icon-container">
                <img src={home} className="home"/>
                <img src={clipboard} className="clipboard"/>
                <img src={camera} className="camera"/>
                <img src={connect} className="connect"/>
                <img src={menu} className="menu"/>
            </div>
           
        </div>
)
}

export default Footer;
