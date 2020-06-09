import ProfileInputField from "../../common/profileInputField/profileInputField";
import ProfileGallery from "../../common/profileGallery/profileGallery"
import React from "react";
import  "./editProfilePage.css";
import {useRecoilState, useRecoilValue,} from "recoil";
import {profileState,loggedInState} from "../../../tools/recoil/recoilStates"
import {Redirect} from "react-router-dom";




function EditProfilePage( ) {
    // const [content, setContent] = useState("")
    const profileDate = useRecoilValue(profileState);
    const isLoggedIn = useRecoilValue(loggedInState);


    return (
        <div className="editProfilePage">
            <main className="editProfilePage_content" >
                <ProfileGallery imagesArr={isLoggedIn && [profileDate.primaryphoto , ...profileDate.subphotos]} onChange={(arr)=>console.log(arr)} />
                <ProfileInputField title={"status"} content={""} placeHolder={"describe yourself in a sentence..."} />
                <ProfileInputField title={"bio"} content={""} placeHolder={"bio..."} rowCount={5}/>
                <ProfileInputField title={"job"} content={""} placeHolder={"job..."} />
                <ProfileInputField title={"city "} content={""} placeHolder={"city..."} />
            </main>
        </div>
    );
}

export default EditProfilePage;
