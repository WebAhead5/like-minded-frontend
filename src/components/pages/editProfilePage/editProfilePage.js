import React, {Component,Fragment} from 'react';
import ProfileInputField from "../../common/fields/profileInputField/profileInputField";
import EpImagesSelection from "../../common/epImagesSelection/epImagesSelection"
import "./editProfilePage.css";
import BackHeader from "../../common/backHeader/backHeader";


class EditProfilePage extends Component {

    constructor(props) {
        super(props);
        this.state={
            tempProfile: props.data.profile
        }
    }
    updateProfile(newFields) {
        this.setState({tempProfile: {...this.state.tempProfile, ...newFields}})
    }
    componentWillUnmount() {
        this.props.data.setProfile(this.state.tempProfile)
    }

    render() {
        const {tempProfile} = this.state;

        return (
            <Fragment>
                <BackHeader href="/profile">Edit Profile</BackHeader>
                <div className="editProfilePage">
                    <main className="editProfilePage_content">

                        <EpImagesSelection initialImagesArr={[tempProfile.primaryphoto, ...tempProfile.subphotos]}
                                           onChange={(arr) => {
                                               this.updateProfile({"primaryphoto": arr[0], "subphotos": arr.slice(1)})
                                           }
                                           }/>
                        <ProfileInputField title={"status"} canEdit={true} content={tempProfile.status}
                                           placeHolder={"describe yourself in a sentence..."}
                                           onChange={(newVal) => this.updateProfile({"status": newVal})}/>
                        <ProfileInputField title={"bio"} content={tempProfile.bio} placeHolder={"bio..."} rowCount={5}
                                           onChange={(newVal) => this.updateProfile({"bio": newVal})}/>
                        <ProfileInputField title={"job"} content={tempProfile.job} placeHolder={"job..."}
                                           onChange={(newVal) => this.updateProfile({"job": newVal})}/>
                        <ProfileInputField title={"city "} content={tempProfile.livingin} placeHolder={"city..."}
                                           onChange={(newVal) => this.updateProfile({"livingin": newVal})}/>
                    </main>
                </div>
            </Fragment>
        );
    }
}

export default EditProfilePage;