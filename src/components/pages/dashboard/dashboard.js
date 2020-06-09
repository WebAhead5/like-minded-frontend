import CandidateImages from "../../common/candidateImages/candidateImages";
import CandidateSuggestion from "../../common/candidateSuggestion/candidateSuggestion"

import React from "react";
// import "./";
const { useState } = React;
let randomImageUrl1 = "https://picsum.photos/id/237/200";
let randomImageUrl2 = "https://picsum.photos/id/2/200";
let randomImageUrl3 = "https://picsum.photos/id/21/200";
let randomImageUrl4 = "https://picsum.photos/id/23/200";
// let randomImageUrl5 = `https://picsum.photos/id/${Math.floor(Math.random()*100)}/200`


function Dashboard({ canEdit, onChange, imagesArr }) {
    // const [content, setContent] = useState("")

    return (
        <div className="dashboard ">
            <CandidateImages />
            <CandidateSuggestion />
        </div>
    );
}

export default Dashboard;
