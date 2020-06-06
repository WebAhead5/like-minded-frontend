import React from 'react';
import './matchPopup.css'
import { Link } from "react-router-dom";

const defaultImage = "/images/defaultImageProfile.png";

function MatchPopup(props) {


    return (
        <div className="matchPopup">
            <img id="userPic" src={defaultImage}></img>
            <div class="outer">
                <svg viewBox="0 0 140 140" preserveAspectRatio="xMinYMin meet">
                    <g>
                        <circle r="50%" cx="50%" cy="50%" class="circle-back" />
                        <text x="50%" y="50%" text-anchor="middle" dy="0.3em">MATCH</text>
                    </g>
                </svg>
            </div>
            <img id="candidatePic" src={defaultImage}></img>
        </div>
    );
}

export default MatchPopup