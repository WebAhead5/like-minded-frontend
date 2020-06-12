
import React from "react";
import ProfileInputField from "../../common/profileInputField/profileInputField";
import EditProfile_imagesSelection from "../../common/editProfile_imagesSelection/editProfile_imagesSelection"
import  "./editProfilePage.css";



function EditProfilePage({data: {profile,setProfile}}) {

    function updateProfile(newFields) {
        setProfile({...profile, ...newFields})
    }

    if(!profile)
        return <div>{JSON.stringify(profile)} loading...</div>

    return (
        <div className="editProfilePage">
            <main className="editProfilePage_content" >


                <EditProfile_imagesSelection initialImagesArr={[profile.primaryphoto, ...profile.subphotos ]} onChange={(arr)=>{
                    updateProfile({"primaryphoto":arr[0] , "subphotos": arr.slice(1)})
                }
                } />
                <ProfileInputField title={"status"} canEdit={true} content={profile.status} placeHolder={"describe yourself in a sentence..."}
                                   onChange={(newVal)=>updateProfile({"status": newVal}) }/>
                <ProfileInputField title={"bio"} content={profile.bio} placeHolder={"bio..."} rowCount={5} onChange={(newVal)=>updateProfile({"bio": newVal}) }/>
                <ProfileInputField title={"job"} content={profile.job} placeHolder={"job..."} onChange={(newVal)=>updateProfile({"job": newVal}) } />
                <ProfileInputField title={"city "} content={profile.livingin} placeHolder={"city..."} onChange={(newVal)=>updateProfile({"livingin": newVal}) } />
            </main>
        </div>
    );
}


export default EditProfilePage;


