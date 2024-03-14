import React from 'react';
import './Hero.css';
import { Button } from '../Button/Button';

function Hero() {
  // React.useEffect(() => {
  //   lottie.loadAnimation({
  //     container: document.querySelector("#react-logo"),
  //     animationData:'https://lottie.host/fa9ca6e9-8f04-4825-a04d-00ed14621ed1/ptYPJPd02s.json',
  //   });
  // }, []);
  return (
    <div className='heroMain'>
      <div className='heroLeft'>
        <p className='heroFirstPara'>AlgoGeek: Elevate Your Tech </p>
        <p className='heroSecondPara'>Journey with Experts</p>
        <p className='heroThirdPara'>Supercharge your tech education with AlgoGeek's immersive learning experience.
         Our expert-led platform brings you in-depth knowledge of data structures and algorithms,
          paving the way for a thriving career in the software domain. Join a select group of passionate learners,
         and unlock the secrets of coding success.</p>
        <div className='heroButton'>
        <Button buttonSize='btn--large'>Enrol Now</Button>
        </div>

        
      </div>
      <div className='heroRight'>
        <img src='/images/cutehero.png' alt='Bhai' className='heroImage'></img>
        
        {/* <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      /> */}
      </div>
    </div>
  )
}

export default Hero;