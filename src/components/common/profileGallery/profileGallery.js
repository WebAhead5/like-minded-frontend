import React, {useEffect} from "react";
import "./profileGallery.css";
const { useState } = React;
const axios = require('axios')

let url = "https://at-cdn-s01.audiotool.com/2015/08/20/documents/sweet_honey_golden_sunshine_princess/3/cover256x256-722d128a98a54cefb00658ebc74d905e.jpg"
let randomImageUrl1 = "https://picsum.photos/id/237/200";
let randomImageUrl2 = "https://picsum.photos/id/2/200";
let randomImageUrl3 = "https://picsum.photos/id/21/200";
let randomImageUrl4 = "https://picsum.photos/id/23/200";

function ProfileGallery({ canEdit = true, onChange, imagesArr = [randomImageUrl1, randomImageUrl2, randomImageUrl3, randomImageUrl4] }) {

    const [imagesArrState, setImagesArrState] = useState(imagesArr)
    // useEffect(() => {
    //     onChange && onChange(imagesArr)
    // },[imagesArr])

    function showUploadImagePopup(index) {

        document.getElementById(`image${index}Uploader`).click()

    }

    function fetchImage(file, index) {
        console.log(index)
        let fr = new FileReader();
        fr.readAsDataURL(file)
        fr.onload = () => {
            let imageString = fr.result.toString()
            let tempArr = [...imagesArrState]
            tempArr[index] = imageString
            setImagesArrState(tempArr)
        }
    }


    return (
        <div className="profileGallery">


            <div className="imageContainer">
                <img className="mainImage" src={imagesArrState[0]} alt="main profile"/>
                {canEdit &&
                <input type="file" style={{display: 'none'}} id="image1Uploader" accept="image/*" onChange={(e) => {
                    fetchImage(e.target.files[0], 0)
                }}/>}

                {canEdit &&  <img className="addIcon" src={"/images/plus.svg"} alt="add symbol"
                      onClick={() => showUploadImagePopup(0)}/>}


            </div>

            <div className="threeImagesContainer">

                {
                    imagesArrState.filter((x, index) => index !== 0).map((src, index) => {
                        return <div className="imageContainer" key={index}>
                            <img alt="main profile" src={src}/>
                            {canEdit &&  <input type="file" style={{display: 'none'}} id={`image${index + 1}Uploader`}
                                   accept="image/*"
                                   onChange={(e) => fetchImage(e.target.files[0], 1 + index)}/> }
                            {canEdit &&  <img className="addIcon" src={"/images/plus.svg"} alt="add symbol"
                                 onClick={() => showUploadImagePopup(1 + index)}/> }
                        </div>
                    })
                }

            </div>

        </div>
    );
}

export default ProfileGallery;
