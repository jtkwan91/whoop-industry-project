import {React, useState } from 'react';
import { Link } from 'react-router-dom'
import './BreathingPage.scss'
import back from '../../assets/images/back.svg'

function BreathingCircle() {
const breatheState = useState('')

const handleClick = (e) => {
e.preventDefault()
console.log(breatheState);
breatheState.setState('breathe__anim')
}

  return (
  <div className='breathe'>
    <div className='breathe__gradient'>
      <div className='breathe__header'>
        <Link className='breathe__header-back' to='/'><img src={back} alt="backarrow" /></Link>
        <h4 className='breathe__header-title'>BREATHWORK CHALLENGE</h4>
      </div>
      <div className='breathe__challenge'>
        <div className='breathe__circle breathe__anim' >Breathe Circle</div>
        <button className='breathe__begin' onClick={handleClick}>Begin</button>
    </div>
    </div>
      <div className='breathe__instructions'>
        <h4 className='breathe__instructions-title'>FOLLOW THE VISUALIZER</h4>
        <p className='breathe__instructions-details'>
        Inhale slowly in through the nose, drawing the breath down toward the stomach. <br /> <br />
        Tighten the abdominal muscles, letting the stomach fall downward while exhaling through the mouth. 
        </p>
        </div>

  </div>
  )
}

export default BreathingCircle;
