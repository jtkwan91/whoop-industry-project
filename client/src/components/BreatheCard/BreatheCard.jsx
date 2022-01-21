import React from 'react';
import logo from "../../assets/images/logo.svg";
import leftArrow from "../../assets/images/leftarrow.svg";
import "./BreatheCard.scss";
import "animate.css";

export default function BreatheCard( {title, text}) {
  return(
      <div className="breathe-card animate__animated animate__fadeInRight">
          <img src={leftArrow} alt="action icon" className="breathe-card__action-icon" />
          <div className="breath-card__content-container">
            <div className="breathe-card__title-container">
                <img src={logo} alt="whoop logo" className="breathe-card__whoop-logo" />
                <h1 className="breathe-card__title">{title}</h1>
            </div>
            <p className="breathe-card__text">{text}</p>
          </div>
          <button className="breathe-card__button">Try it</button>
      </div>
    )
}
