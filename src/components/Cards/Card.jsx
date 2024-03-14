import React from 'react';
import './Card.css';

function Card({ Heading, Writeup, img}) {
  return (
    <div className='mainCardDiv'>
        <div className='cardsecondaryDiv'>
        <div className='cardImageBox'>
             <div className='cardImage'><img src={img}
        alt="this image contains"/></div>
        </div>
        <div className='cardHeading'>
              {Heading}
        </div>
        <div className='cardDesc'>
             {Writeup}
        </div>
        </div>
    </div>
  )
}

export default Card;