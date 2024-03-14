import React from "react";
import './OurApproach.css'
import Card from "../Cards/Card";
import { CardData } from "../../constants/card.constants";

function OurApproach(){
    return (
        <div className="mainDiv" id="Approach">
            <div className="approachHeadingDiv">
                <p className="approachHeading">Our Approach</p>
            </div>
            <div className="mainCardDiv1">
                <Card {...CardData[0]}/>
                <Card {...CardData[1]}/>
                <Card {...CardData[2]}/>
            </div>
        </div>
    )
}

export default OurApproach;