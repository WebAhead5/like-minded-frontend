import React, { useEffect } from "react";
import "./profileGallery.css";
const { useState } = React;



const defaultImage = "/images/defaultImageProfile.png";

function ProfileGallery({ canEdit = true, onChange, imagesArr = [defaultImage,defaultImage,defaultImage,defaultImage,defaultImage] }) {

    const [imagesArrState, setImagesArrState] = useState(imagesArr)
    useEffect(() => {
        if(imagesArrState.length <4)
       {
            let tempArr = [...imagesArrState]
            for(let i = tempArr.length; i<= 4 ; i++)
            tempArr.push(defaultImage)
            setImagesArrState(tempArr)
       }
       else if(imagesArrState.length > 4)
            setImagesArrState(imagesArrState.slice(0,4))
       
        onChange && onChange(imagesArrState)

    },[imagesArrState])

    function showUploadImagePopup(index) {
        console.log(index)

        document.getElementById(`image${index}Uploader`).click()

    }

    function fetchImage(file, index) {
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
                <img className="mainImage" src={imagesArrState[0]} alt="main profile" />
                {canEdit &&
                    <input type="file" style={{ display: 'none' }} id="image0Uploader" accept="image/*" onChange={(e) => {
                        fetchImage(e.target.files[0], 0)
                    }} />}

                {canEdit && <img className="addIcon" src={"/images/plus.svg"} alt="add symbol"
                    onClick={() => showUploadImagePopup(0)} />}
            </div>
            <div className="threeImagesContainer">
                {
                    imagesArrState.filter((x, index) => index !== 0).map((src, index) => {
                        return <div className="imageContainer" key={index}>
                            <img alt="main profile" src={src} />
                            {canEdit && <input type="file" style={{ display: 'none' }} id={`image${index + 1}Uploader`}
                                accept="image/*"
                                onChange={(e) => fetchImage(e.target.files[0], 1 + index)} />}
                            {canEdit && <img className="addIcon" src={"/images/plus.svg"} alt="add symbol"
                                onClick={() => showUploadImagePopup(1 + index)} />}
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default ProfileGallery;
