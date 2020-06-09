import React from "react";
import "./profileGallery.css";
const { useState } = React;

let url = "https://at-cdn-s01.audiotool.com/2015/08/20/documents/sweet_honey_golden_sunshine_princess/3/cover256x256-722d128a98a54cefb00658ebc74d905e.jpg"

function ProfileGallery({ canEdit, onChange, imagesArr }) {
    // const [content, setContent] = useState("")

    return (
        <div className="profileGallery">
            <div className="imageContainer">
                <img className="mainImage" src={url} alt="main profile"></img>
                <img className="addIcon" src={"/images/plus.svg"} alt="add symbol"></img>
            </div>
            <div className="threeImagesContainer">
                <div className="imageContainer">
                    <img alt="main profile" src={url}></img>
                    <img className="addIcon" src={"/images/plus.svg"} alt="add symbol"></img>
                </div>
                <div className="imageContainer">
                    <img alt="main profile" src={url}></img>
                    <img className="addIcon" src={"/images/plus.svg"} alt="add symbol"></img>
                </div>
                <div className="imageContainer">
                    <img alt="main profile" src={url}></img>
                    <img className="addIcon" src={"/images/plus.svg"} alt="add symbol"></img>
                </div>
            </div>
        </div>
    );
}

export default ProfileGallery;
