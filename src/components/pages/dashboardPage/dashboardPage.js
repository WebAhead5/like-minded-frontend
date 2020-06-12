import CandidateImages from "../../common/candidateImages/candidateImages";
import CandidateSuggestion from "../../common/candidateSuggestion/candidateSuggestion"
import DashboardQuizSummary from "../../common/dashboardQuizSummary/dashboardQuizSummary"

import React, {Fragment} from "react";
import NavBar from "../../common/navBar/navBar";
import ProfileGallery from "../../common/profileGallery/profileGallery";
import ProfileInputField from "../../common/profileInputField/profileInputField";

function DashboardPage({ canEdit, onChange, imagesArr }) {
    // const [content, setContent] = useState("")

    return (
        <div className="dashboard ">needs work
            {/*<CandidateImages />*/}
            {/*<CandidateSuggestion />*/}
            {/*<DashboardQuizSummary />*/}
            <ProfileGallery/>
            <ProfileInputField/>
        </div>
    );
}

export default DashboardPage;
