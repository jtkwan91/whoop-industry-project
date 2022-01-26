import React from 'react';
import logo from "../../assets/images/logo.svg";
import rightArrow from "../../assets/images/rightarrow.svg"
import "./StrainCard.scss"
import "animate.css";

export default function StrainCard( {title, text, handleClick}) {
  return(
      <div className="strain-card animate__animated animate__fadeInLeft">
          <div className="breath-card__content-container">
            <div className="strain-card__title-container">
                <img src={logo} alt="whoop logo" className="strain-card__whoop-logo" />
                <h1 className="strain-card__title">{title}</h1>
            </div>
            <p className="strain-card__text">{text}</p>
          </div>
          <img onClick={handleClick}src={rightArrow} alt="action icon" className="strain-card__action-icon" />
      </div>
    )
}
