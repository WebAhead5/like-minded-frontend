import ProfileInputField from "../profileInputField/profileInputField";
import ProfileGallery from "../profileGallery/profileGallery"
import React from "react";
// import "./";
const { useState } = React;


function EditProfilePage({ canEdit, onChange, imagesArr }) {
    // const [content, setContent] = useState("")

    return (
        <div className="editProfilePage ">
            <ProfileGallery />
            <ProfileInputField />
        </div>
    );
}

export default EditProfilePage;
