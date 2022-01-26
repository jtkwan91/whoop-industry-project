import React from 'react';
import profile from '../../assets/images/profile.svg'
import headphones from '../../assets/images/headphones.svg'
import './Header.scss'

function Header() {
    return (
        <div className='header'>
            <div className='header__bar'>
                <img src={profile} alt="profile" />
                    <div className='header__date'>
                        <button className='header__date-left'>{'<'}
                        </button>
                        <div className='black-circle left'></div>
                            <div className='header__date-current'> TODAY </div>
                        <div className='black-circle right'></div>
                        <button className='header__date-right'>{'>'}
                        </button>
                    </div>
                <img src={headphones} alt="headphones" />
            </div>
        </div>
)
}

export default Header;
