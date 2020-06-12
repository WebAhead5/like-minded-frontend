import React, { useEffect } from "react";
import "./candidateImages.css";
const { useState } = React;



const defaultImage = "/images/defaultImageProfile.png";

function CandidateImages({ imagesArr }) {

    const [selectedImageState, setSelectedImageState] = useState(imagesArr)

    let imagesArr1 = [1,2,3]

    return (
        <div className="candidateImages">
            <img src={defaultImage} alt="candidate"></img>
            <div className="dotsContainer">
                {
                    imagesArr1.map((eachImage, index) => {
                        return <span key={index}></span>
                    })
                }
            </div>
        </div>
    )
}

export default CandidateImages;