import React from 'react';
import './Hero.css';
import { Button } from '../Button/Button';

function Hero() {
  return (
    <div className='heroMain'>
      <div className='heroLeft'>
        <p className='heroFirstPara'>Tutor10 : Accelerate Your </p>
        <p className='heroSecondPara'>Learnings with IITIANS</p>
        <p className='heroThirdPara'>Take your learning to the next level with Tutor 10's 45-day crash course.
        Led by IITIANs, you will cover topics in math and science to get ahead 
         of your regular class. Limited to only 100 students, apply now!</p>
        <div className='heroButton'>
        <Button buttonSize='btn--large'>Enrol Now</Button>
        </div>

        
      </div>
      <div className='heroRight'>
        <img src='/images/19197907.jpg' alt='Bhai' className='heroImage'></img>
      </div>
    </div>
  )
}

export default Hero;