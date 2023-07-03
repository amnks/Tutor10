import React from 'react';
import './Card2.css';

function Card2() {
  return (
    <div class="container">
    <div class="user-image">
        <img src="https://imageio.forbes.com/specials-images/imageserve/627bd323672c41ea74c88a13/0x0.jpg?format=jpg&crop=1834,1833,x583,y167,safe&height=416&width=416&fit=bounds"
        alt="this image contains"/>
    </div>

    <div class="content">
        <h3 class="name">Jackson Schutt</h3>
        <p class="username">Graduate @IIT BHU</p>
        <p class="details">
          Graduate from IIT Madras. Passionate about science and its fundamental principles.
        </p>
    </div>
</div>
  )
}

export default Card2