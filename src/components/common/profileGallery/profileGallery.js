import React from "react";
import "./profileGallery.css";
const { useState } = React;
const axios = require('axios')

let url = "https://at-cdn-s01.audiotool.com/2015/08/20/documents/sweet_honey_golden_sunshine_princess/3/cover256x256-722d128a98a54cefb00658ebc74d905e.jpg"
let randomImageUrl1 = "https://picsum.photos/id/237/200";
let randomImageUrl2 = "https://picsum.photos/id/2/200";
let randomImageUrl3 = "https://picsum.photos/id/21/200";
let randomImageUrl4 = "https://picsum.photos/id/23/200";

function ProfileGallery({ canEdit, onChange, imagesArr = [randomImageUrl1, randomImageUrl2, randomImageUrl3, randomImageUrl4] }) {

    const [imagesArrState, setImagesArrState] = useState(imagesArr)

    //state = { selectedFile: null }

    let fileSelectedHandler = event => {
        let file = event.target.files[0] 
        console.log(file )
    var fr = new FileReader();
    fr.readAsDataURL(file)
    fr.onload= ()=>{
        let imageString = fr.result.toString()
        setImagesArrState ([imageString,imageString,imageString,imageString])

}

    }


    return (
        <div className="profileGallery">
            {/* <div className="imageContainer">
                <img className="mainImage" src={imagesArr[0] || randomImageUrl1} alt="main profile"></img>
                <input type="file" style={{ display: 'none' }} onChange={this.fileSelectedHandler} ref={fileInput => this.fileInput = fileInput} ></input>
                <img className="addIcon" src={"/images/plus.svg"} alt="add symbol" onClick={this.fileInput.click()}></img>
                <button onClick={this.fileUploadHandler}>Upload</button>
            </div> */}
              <div className="imageContainer">
                <img className="mainImage" src={imagesArrState[0] } alt="main profile"></img>
                <input type="file" style={{ display: 'none' }} id="image1Uploader" onChange={fileSelectedHandler} />
                <img className="addIcon" src={"/images/plus.svg"} alt="add symbol" onClick={()=>{
                    document.getElementById("image1Uploader").click()
                }}></img>

                
            </div>

            <div className="threeImagesContainer">
                <div className="imageContainer">
                    <img alt="main profile" src={imagesArrState[1]}></img>
                    <img className="addIcon" src={"/images/plus.svg"} alt="add symbol"></img>
                </div>
                <div className="imageContainer">
                    <img alt="main profile" src={imagesArrState[2] }></img>
                    <img className="addIcon" src={"/images/plus.svg"} alt="add symbol"></img>
                </div>
                <div className="imageContainer">
                    <img alt="main profile" src={imagesArrState[3] }></img>
                    <img className="addIcon" src={"/images/plus.svg"} alt="add symbol"></img>
                </div>
            </div>
        </div>
    );
}

export default ProfileGallery;
