import React, { useEffect } from "react";
import "./candidateSuggestion.css";
const { useState } = React;

const defaultImage = "/images/defaultImageProfile.png";

function CandidateSuggestion({ userProfile }) {

    const [expandedState, setExpandedState] = useState(false)

    return (
        <div className="candidateSuggestion">
            <p>Discover</p>
            <div className="candidateSuggestion box-shadow width90">
                <img src={defaultImage}></img>
                <p className="candidateName">Dex Schneider</p>
                <p className="distance">5km Away</p>
                <p className="bioPreview">"Hi I'm Dex Schneider... bio text lorem ipsum... ya ya.</p>
                <p className="readMoreButton">Read more</p>
            </div>
        </div>
    )
}

export default CandidateSuggestion;