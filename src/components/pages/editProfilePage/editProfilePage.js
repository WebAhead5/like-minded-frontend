import ProfileInputField from "../../common/profileInputField/profileInputField";
import ProfileGallery from "../../common/profileGallery/profileGallery"
import React, {useEffect, useState} from "react";
import  "./editProfilePage.css";
import {useRecoilState, useRecoilValue,} from "recoil";
import {profileState, loggedInState} from "../../../tools/recoil/recoilSelectors"
import {getProfileData, setProfileData} from "../../../tools/data";




function EditProfilePage( ) {

    const [profile,setProfile] = useState(null)
    useEffect(()=> {
        getProfileData().then(res => {
            if(!setProfile)
                return;
            if(res)
                setProfile(res)
            else
                window.location = "/login"
        })

    },[])



    function updateValue(obj) {

        let newProf = {...profile, ...obj}
        setProfile(newProf)
        setProfileData(newProf).then(ok => {
            if (!ok) getProfileData().then(data => {
                if (!setProfile)
                    return;
                else setProfile(data)
            })
        })
    }


    if(!profile)
        return <div>loading...</div>


    return (
        <div className="editProfilePage">
            <main className="editProfilePage_content" >


                <ProfileGallery imagesArr={[profile.primaryphoto, ...profile.subphotos ]} onChange={(arr)=>{
                    updateValue({"primaryphoto":arr[0] , "subphotos": arr.slice(1)})
                }
                } />
                <ProfileInputField title={"status"} canEdit={true} content={profile.status} placeHolder={"describe yourself in a sentence..."}
                                   onChange={(newVal)=>updateValue({"status": newVal}) }/>
                <ProfileInputField title={"bio"} content={profile.bio} placeHolder={"bio..."} rowCount={5} onChange={(newVal)=>updateValue({"bio": newVal}) }/>
                <ProfileInputField title={"job"} content={profile.job} placeHolder={"job..."} onChange={(newVal)=>updateValue({"job": newVal}) } />
                <ProfileInputField title={"city "} content={profile.livingin} placeHolder={"city..."} onChange={(newVal)=>updateValue({"city": newVal}) } />
            </main>
        </div>
    );
}

export default EditProfilePage;


