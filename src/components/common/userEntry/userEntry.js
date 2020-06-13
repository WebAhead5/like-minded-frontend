import React from 'react';
import "./userEntry.css";
import LightShadowWrapper from "../wrappers/lightShadowWrapper/lightShadowWrapper";
import CircularImage from "../circularImage/circularImage";

const defaultImage = "/images/defaultImageProfile.png";

function UserEntry({profile,children, onClick,className, onImgClick}) {
    return (
        <LightShadowWrapper className={`userEntry ${className}`} onClick={onClick} >

            <CircularImage  className="userEntry_profileImage" onClick={onImgClick} src={profile?.primaryphoto || defaultImage}/>

            <div className="userEntry_nameAndChildren">
                <span className="userEntry_Name">{profile?.firstname} {profile?.lastname}</span>
                {children}
            </div>



        </LightShadowWrapper>

    );
}


export default UserEntry;