import React, {useEffect, useState} from 'react';
import {useRecoilState} from "recoil";
import {profileState} from "../../../tools/recoil/recoilStates";
import ProfileGallery from "../../common/profileGallery/profileGallery";
import ProfileInputField from "../../common/profileInputField/profileInputField";
import {Link} from "react-router-dom";
import {getProfileData, setProfileData} from "../../../tools/data";

function ProfilePage(props) {

    const [profile,setProfile] = useState(null)
    useEffect(()=> {
        getProfileData().then(res => {
            if(res)
                setProfile(res)
            else
                window.location = "/login"
        })

    },[])



    function updateValue(obj) {

        let newProf = {...profile,...obj}
        setProfile(newProf)
        setProfileData(newProf).then(ok => {
            if(!ok)  getProfileData().then(data=>setProfile(data))
        })
    }


    if(!profile)
        return <div>loading...</div>


    return (
        <div>
            <ProfileGallery imagesArr={[profile.primaryphoto, ...profile.subphotos]} showSmall={false}/>
            <span>{profile.status}</span>

            <Link to="/profile/edit">
                <div>
                    <img src="/images/icon-feather.png" alt="edit profile button icon"/>
                    <span>Edit profile</span>
                </div>
            </Link>

            <Link to="/settings">
                <div>
                    <img src="/images/icon-settings.png" alt="edit profile button icon"/>
                    <span>Settings</span>
                </div>
            </Link>

        </div>
    );
}

export default ProfilePage;