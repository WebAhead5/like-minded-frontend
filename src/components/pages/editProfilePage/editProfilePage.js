import ProfileInputField from "../../common/profileInputField/profileInputField";
import ProfileGallery from "../../common/profileGallery/profileGallery"
import React, {useEffect, useState} from "react";
import  "./editProfilePage.css";
import {useRecoilState, useRecoilValue,} from "recoil";
import {profileState, loggedInState} from "../../../tools/recoil/recoilStates"




function EditProfilePage( ) {
    const [profile, setProfile] = useRecoilState(profileState)
    const [temp,setTemp] = useState(profile)
    const {status,bio,primaryphoto,subphotos, firstname,lastname,livingin,job} = temp
    function updateValue(...pairs) {
        pairs.forEach(([fieldName,newVal])=>{
            setProfile({[fieldName]: newVal})
            setTemp({...temp, [fieldName]: newVal})
        })

    }
    return (
        <div className="editProfilePage">

            <main className="editProfilePage_content" >
                <ProfileGallery imagesArr={[primaryphoto , ...subphotos]} onChange={(arr)=>{
                    updateValue(["primaryphoto", arr[0]],["subphotos",arr.slice(1)])
                }
                } />
                <ProfileInputField title={"status"} canEdit={true} content={status} placeHolder={"describe yourself in a sentence..."} onChange={(newVal)=>updateValue(["status",newVal]) }/>
                <ProfileInputField title={"bio"} content={bio} placeHolder={"bio..."} rowCount={5} onChange={(newVal)=>updateValue(["bio",newVal]) }/>
                <ProfileInputField title={"job"} content={job} placeHolder={"job..."} onChange={(newVal)=>updateValue(["job",newVal]) } />
                <ProfileInputField title={"city "} content={livingin} placeHolder={"city..."} onChange={(newVal)=>updateValue(["city",newVal]) } />
            </main>
        </div>
    );
}

export default EditProfilePage;


