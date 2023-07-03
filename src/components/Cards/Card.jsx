import React from 'react';
import './Card.css';

function Card() {
  return (
    <div className='mainCardDiv'>
        <div className='cardsecondaryDiv'>
        <div className='cardImageBox'>
             <div className='cardImage'></div>
        </div>
        <div className='cardHeading'>
              Yoo Card!!
        </div>
        <div className='cardDesc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid suscipit doloremque hic aperiam aspernatur? Nobis dolorem animi doloremque similique laboriosam.
        </div>
        </div>
    </div>
  )
}

export default Card;