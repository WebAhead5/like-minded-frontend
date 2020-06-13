import React from "react";
import EpImagesSelection from "../../common/epImagesSelection/epImagesSelection";
import ProfileInputField from "../../common/fields/profileInputField/profileInputField";

function DashboardPage({ canEdit, onChange, imagesArr }) {

    return (
        <div className="dashboard ">needs work
            {/*<CandidateImages />*/}
            {/*<CandidateSuggestion />*/}
            {/*<DashboardQuizSummary />*/}
            <EpImagesSelection/>
            <ProfileInputField/>
        </div>
    );
}

export default DashboardPage;
