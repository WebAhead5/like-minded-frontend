import React from 'react';
import "./userEntry.css";
import SmallEntryWrapper from "../wrappers/smallEntryWrapper/smallEntryWrapper";
import CircularImage from "../circularImage/circularImage";

const defaultImage = "/images/defaultImageProfile.png";

function UserEntry({profile,children, onClick,className}) {
    return (
        <SmallEntryWrapper className={`userEntry ${className}`} onClick={onClick} >

            <CircularImage className="userEntry_profileImage" src={profile?.primaryphoto || defaultImage}/>

            <div className="userEntry_nameAndChildren">
                <span className="userEntry_Name">{profile?.firstname} {profile?.lastname}</span>
                {children}
            </div>



        </SmallEntryWrapper>

    );
}


export default UserEntry;