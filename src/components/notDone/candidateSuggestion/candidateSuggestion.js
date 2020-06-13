import React, {Fragment, useState} from "react";
import "./candidateSuggestion.css";
import LightShadowWrapper from "../../common/wrappers/lightShadowWrapper/lightShadowWrapper";
import CircularImage from "../../common/circularImage/circularImage";
import ProfileInputField from "../../common/fields/profileInputField/profileInputField";

const defaultImage = "/images/defaultImageProfile.png";

function CandidateSuggestion({data: {profile: {primaryphoto, firstname, lastname, status, bio, livingin,job}}}) {

    const [expanded, setExpanded] = useState(false);
    return (
        <Fragment>
            <p>Discover</p>
            <LightShadowWrapper className="candidateSuggestion" onClick={() => setExpanded(!expanded)}>
                <CircularImage src={primaryphoto} className="candidateSuggestion_img"/>
                <span className="candidateName">{firstname} {lastname}</span>
                {/* todo <p className="distance">5km Away</p> */}
                <span className="candidateSuggestion_text--lite">{status}</span>
                <span className="candidateSuggestion_text--lite">Read more</span>
            </LightShadowWrapper>
            {
                expanded ?
                    <Fragment>
                        <ProfileInputField canEdit={false} title="Bio" rowCount={10} content={bio}/>
                        <ProfileInputField canEdit={false} title="Living In" content={livingin}/>
                        <ProfileInputField canEdit={false} title="Job" content={job}/>
                    </Fragment>
                    : ""
            }
        </Fragment>

    )
}

export default CandidateSuggestion;