import React from 'react';
import './Whyus.css';

function Whyus() {
  return (
    <div className='mainWhy'>
        <h2 className='headingWhy'>Why Tutor10?</h2>
       <div className='secondaryWhy'>
        <div className='whyCard'>
            <h2 className='whyH2'>Expert Knowledge</h2>
            <p className='whyP'>Our team of IITIANs provide world-class education and will share their own experiences to help students succeed.</p>
        </div>
        <div className='whyCard'>
            <h2 className='whyH2'>Smaller classes</h2>
            <p className='whyP'>We limit our enrollment to 100 students to ensure that each student gets individual attention and personalized feedback.</p>
        </div>
        <div className='whyCard'>
            <h2 className='whyH2'>Focus on application</h2>
            <p className='whyP'>We teach students not only the subject matter, but how to apply it in real-world scenarios. This unique approach ensures lasting understanding and success beyond the classroom.</p>
        </div>
       </div>
    </div>
  )
}

export default Whyus;