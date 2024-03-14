import React from 'react';
import './Mentors.css';
import Card2 from '../Cards/Card2';
import { Mentor_data } from '../../constants/mentors.constants';

function Mentors() {
  return (
    <div className='mainMentors'>
        <div className='headingMentorDiv'>
        <h2 className='headingMentors'>Our Mentors</h2>
        </div>
        <div className='secondaryMentor'>
          <div className='innerMentor'>
            <Card2 {...Mentor_data[0]}/>
            <Card2 {...Mentor_data[1]}/>
          </div>
        </div>
        <div className='secondaryMentor'>
        <div className='innerMentor'>
            <Card2 {...Mentor_data[2]}/>
            <Card2 {...Mentor_data[3]}/>
          </div>
        </div>
    </div>
  )
}

export default Mentors