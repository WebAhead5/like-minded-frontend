import React, { useEffect } from "react";
import "./candidateSuggestion.css";
const { useState } = React;

const defaultImage = "/images/defaultImageProfile.png";

function CandidateSuggestion({ imagesArr }) {

    return (
        <div className="candidateSuggestion">
            <img src={defaultImage}></img>
            <p class="candidateName">Dex Schneider</p>
            <p class="distance">5km Away</p> 
            <p class="bioPreview">"Hi I'm Dex Schneider... bio text lorem ipsum... ya ya.</p>
            <p class="readMoreButton">Read more</p>
        </div>
    )
}

export default CandidateSuggestion;