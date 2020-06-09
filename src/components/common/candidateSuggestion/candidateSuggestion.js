// info:
// recieves a uesr profile object
// loads the date and displayes it
// if pressed - it expands and displays the full user profile

// receives (in props) :
// profile: same as GET /userProfile/[userId]

// local states
// expanded = true/false


import React, { useEffect } from "react";
const { useState } = React;


const defaultImage = "/images/defaultImageProfile.png";

function CandidateSuggestion({ imagesArr }) {

    return (
        <div className="candidateImages">

        </div>
    )
}

export default CandidateSuggestion;