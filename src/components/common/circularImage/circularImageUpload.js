import React from 'react';
import CircularImage from "./circularImage";
import "./circularImageUpload.css";


function CircularImageUpload({src ,alt,onUpload ,className}) {

    function showUploadImagePopup(e) {
        e.currentTarget.querySelector(`input[type="file"]`).click()

    }

    function fetchImage(file) {
        let fr = new FileReader();
        fr.readAsDataURL(file)
        fr.onload = () => {
            let imageString = fr.result.toString()
            onUpload &&  onUpload(imageString)
        }
    }


    return (
        <div className={`circularImageUpload ${className}` } onClick={  showUploadImagePopup }>
            <CircularImage src={src} alt={alt} className={"circularImageUpload_image"}/>
            <input type="file" style={{ display: 'none' }}  accept="image/*" onChange={(e) => {fetchImage(e.target.files[0], 0)}} />
            <CircularImage className="circularImageUpload_addIcon" src={"/images/plus.svg"} alt="add symbol"  />

        </div>
    );
}

export default CircularImageUpload;