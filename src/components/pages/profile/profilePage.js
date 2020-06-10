import React, {useState} from 'react';
import {useRecoilState} from "recoil";
import {profileState,currentRouteState} from "../../../tools/recoil/recoilStates";
import ProfileGallery from "../../common/profileGallery/profileGallery";
import ProfileInputField from "../../common/profileInputField/profileInputField";

function ProfilePage(props) {

    const [profile, setProfile] = useRecoilState(profileState)
    const [temp, setTemp] = useState(profile)
    const {status, bio, primaryphoto, subphotos, firstname, lastname, livingin, job} = temp
    const [currentRoute, setRoute] = useRecoilState(currentRouteState)

    function updateValue(fieldName, newVal) {

        setProfile({[fieldName]: newVal})
        setTemp({...temp, [fieldName]: newVal})

    }

    return (
        <div>
            <ProfileGallery imagesArr={[primaryphoto, ...subphotos]} onImgChange={(arr) => {
                updateValue("primaryphoto", arr[0])
                updateValue("subphotos", arr.slice(1))
            }
            }/>
            <span>{status}</span>

            <a onClick={() => setRoute("/profile/edit")}>
                <div>
                    <img src="/images/icon-feather.png" alt="edit profile button icon"/>
                    <span>Edit profile</span>
                </div>
            </a>

            <a onClick={() => setRoute("/settings")}>
                <div>
                    <img src="/images/icon-settings.png" alt="edit profile button icon"/>
                    <span>Settings</span>
                </div>
            </a>

        </div>
    );
}

export default ProfilePage;