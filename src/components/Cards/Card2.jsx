import React from 'react';
import './Card2.css';

function Card2({Name, College, Company, Offers, Desc, Photo, WorkedAt}) {
  return (
    <div class="container">
    <div class="user-image">
        <img src={Photo}
        alt="this image contains"/>
    </div>

    <div class="content">
        <h3 class="name">{Name}</h3>
        <p class="username">Currently @{Company}</p>
        {Offers &&<p class="username">Had offers @{Offers}</p>}
        {WorkedAt &&<p class="username">Previous @{WorkedAt}</p>}
        <p class="details">
          {Desc}
        </p>
    </div>
</div>
  )
}

export default Card2