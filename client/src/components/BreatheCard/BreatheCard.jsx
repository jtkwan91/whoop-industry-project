import React from 'react';
import logo from "../../assets/images/logo.svg"
import rightArrow from "../../assets/images/rightarrow.svg"
import "./BreatheCard.scss"

export default function BreatheCard() {
  return(
      <div className="breathe-card">
          <div className="breath-card__content-container">
            <div className="breathe-card__title-container">
                <img src={logo} alt="whoop logo" className="breathe-card__whoop-logo" />
                <h1 className="breathe-card__title">Breathwork Challenge</h1>
            </div>
            <p className="breathe-card__text">Often forgotten, but synchronized breathing can help you relax instantly!</p>
          </div>
          <img src={rightArrow} alt="action icon" className="breathe-card__action-icon" />
      </div>
    )
}
