// info:
// receives an array of images,
// it fetches them, it dislayes them
// it allows the user to scroll between them

// receives (in props) :
// images:
// an array of strings ["...","...","...", etc... ]

// local states
// selectedImage:
// stores the currently selected image for scrolling througth the images

import React, { useEffect } from "react";
import "./candidateImages.css";
const { useState } = React;


const defaultImage = "/images/defaultImageProfile.png";

function CandidateImages({ imagesArr }) {

    const [selectedImageState, setSelectedImageState] = useState(imagesArr)

    return (
        <div className="candidateImages">
            <img src={defaultImage}></img>
            <div className="dotsContainer">
                {/* {
                    imagesArr.map((eachImage, index)=>{
                        return <span key={index}></span>
                    })
                } */}
            </div>
        </div>
    )
}

export default CandidateImages;