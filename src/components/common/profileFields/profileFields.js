import React from 'react';
import ProfileInputField from "../fields/profileInputField/profileInputField";
import "./profileFields.css"
function ProfileFields({profile,onFieldChange,canEdit}) {

    return (
        <div className="profileFields">
            <ProfileInputField title={"status"}
                               canEdit={canEdit}
                               className="profileFields_field"
                               content={profile.status}
                               placeHolder={"describe yourself in a sentence..."}
                               onChange={(newVal) => onFieldChange({"status": newVal})}/>

            <ProfileInputField title={"bio"}
                               canEdit={canEdit}
                               content={profile.bio}
                               className="profileFields_field"
                               placeHolder={"bio..."}
                               rowCount={5}
                               onChange={(newVal) => onFieldChange({"bio": newVal})}/>

            <ProfileInputField title={"job"}
                               canEdit={canEdit}
                               className="profileFields_field"
                               content={profile.job}
                               placeHolder={"job..."}
                               onChange={(newVal) => onFieldChange({"job": newVal})}/>

            <ProfileInputField title={"city "}
                               canEdit={canEdit}
                               className="profileFields_field"
                               content={profile.livingin}
                               placeHolder={"city..."}
                               onChange={(newVal) => onFieldChange({"livingin": newVal})}/>

        </div>
    );
}

export default ProfileFields;