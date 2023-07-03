import React from 'react';
import './Mentors.css';
import Card2 from '../Cards/Card2';

function Mentors() {
  return (
    <div className='mainMentors'>
        <div className='headingMentorDiv'>
        <h2 className='headingMentors'>Our Mentors</h2>
        </div>
        <div className='secondaryMentor'>
            <Card2/>
            <Card2/>
        </div>
        <div className='secondaryMentor'>
            <Card2/>
            <Card2/>
        </div>
    </div>
  )
}

export default Mentors