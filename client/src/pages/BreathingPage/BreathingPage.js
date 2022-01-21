import React from 'react';
import './BreathingPage.scss'

function BreathingCircle() {

const breatheStart = (e) => {
e.preventDefault()

}

  return (
  <div className='breathe'>
    <div className='breathe__circle breathe__anim'>Breathe Circle</div>
    <button className='breathe__begin' onClick={breatheStart}>Begin</button>
    <p className='breathe__instructions'>Inhale slowly in through the nose, drawing the breath down toward the stomach. Tighten the abdominal muscles, letting the stomach fall downward while exhaling through the mouth. </p>
  </div>
  )
}

export default BreathingCircle;
