import React, {Component, Fragment} from 'react';
import ProfileInputField from "../../common/fields/profileInputField/profileInputField";
import EpImagesSelection from "../../common/epImagesSelection/epImagesSelection"
import "./editProfilePage.css";
import BackHeader from "../../common/backHeader/backHeader";
import ProfileFields from "../../common/profileFields/profileFields";


class EditProfilePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
                    <div className="editProfilePage_content">

                        <EpImagesSelection initialImagesArr={[tempProfile.primaryphoto, ...tempProfile.subphotos]}
                                           onChange={(arr) => {
                                               this.updateProfile({"primaryphoto": arr[0], "subphotos": arr.slice(1)})
                                           }
                                           }/>

                        <br/><br/>

                        <ProfileFields profile={tempProfile} canEdit={true} onFieldChange={(obj) =>
                            this.updateProfile(obj)
                        }/>

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default EditProfilePage;