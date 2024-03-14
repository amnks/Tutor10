import React from "react";
import './CarouselCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'



function CarouselCard({text, src, name, college}){
    return(
        <div className="mainCarouselCard">
        <div className="swiperCardtext">
            <div className="fontdiv">
            <FontAwesomeIcon className="fontIconBefore" icon={faQuoteLeft} />
                  {text}
            <FontAwesomeIcon className="fontIconAfter" icon={faQuoteRight} />
            </div>
        </div>
        <div className="swipernextsection">
          <img src={src} alt="abcd" className="geekImg"/>
          <div className="geekName">
            <div>
            <h3>{name}</h3>
            <p>{college}</p>
            </div>
          </div>
        </div>
        </div>
        
    )
}

export default CarouselCard;