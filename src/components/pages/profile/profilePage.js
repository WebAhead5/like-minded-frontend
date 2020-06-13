import React from 'react';
import "./profilePage.css"
import CircularImage from "../../common/circularImage/circularImage";
import {history} from "../../../tools/history";

function ProfilePage({data: {profile}}) {

    return (
        <div className={"profilePage"}>

            <div className={"profilePage_name_and_buttons"}>

            <div className={"profilePage_userInfo"} onClick={()=>history.push("/profile/edit")}>

                <CircularImage className={"profilePage_userInfo_image"} src={profile.primaryphoto}
                               alt={"user profile image"}/>
                <span className={"profilePage_userInfo_name"}>{profile.firstname} {profile.lastname}</span>
                <p className={"profilePage_userInfo_status"}>{profile.status}</p>

            </div>

            <div className={"profilePage_buttonsContainer"}>

                <div className={"profilePage_button"} onClick={() => history.push("/profile/edit")}>
                    <img src="/images/icon-feather.svg" alt="edit profile button icon"/>
                    <span>Edit profile</span>
                </div>

                <div className={"profilePage_button"} onClick={() => history.push("/settings")}>
                    <img src="/images/icon-settings.png" alt="edit profile button icon"/>
                    <span>Settings</span>
                </div>

            </div>

           </div>

        </div>
    );
}

export default ProfilePage;