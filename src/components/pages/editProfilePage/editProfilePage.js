import ProfileInputField from "../../common/profileInputField/profileInputField";
import ProfileGallery from "../../common/profileGallery/profileGallery"
import React from "react";
// import "./";
const { useState } = React;
let randomImageUrl1 = "https://picsum.photos/id/237/200";
let randomImageUrl2 = "https://picsum.photos/id/2/200";
let randomImageUrl3 = "https://picsum.photos/id/21/200";
let randomImageUrl4 = "https://picsum.photos/id/23/200";
// let randomImageUrl5 = `https://picsum.photos/id/${Math.floor(Math.random()*100)}/200`


function EditProfilePage({ canEdit, onChange, imagesArr }) {
    // const [content, setContent] = useState("")

    return (
        <div className="editProfilePage ">
            <ProfileGallery imagesArr={[randomImageUrl1,randomImageUrl2]} onChange={(arr)=>console.log(arr)} />
            <ProfileInputField />
        </div>
    );
}

export default EditProfilePage;
