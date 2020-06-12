import CandidateImages from "../../notDone/candidateImages/candidateImages";
import CandidateSuggestion from "../../notDone/candidateSuggestion/candidateSuggestion"
import DashboardQuizSummary from "../../notDone/dashboardQuizSummary/dashboardQuizSummary"

import React, {Fragment} from "react";
import NavBar from "../../common/navBar/navBar";
import EditProfile_imagesSelection from "../../common/editProfile_imagesSelection/editProfile_imagesSelection";
import ProfileInputField from "../../common/profileInputField/profileInputField";

function DashboardPage({ canEdit, onChange, imagesArr }) {
    // const [content, setContent] = useState("")

    return (
        <div className="dashboard ">needs work
            {/*<CandidateImages />*/}
            {/*<CandidateSuggestion />*/}
            {/*<DashboardQuizSummary />*/}
            <EditProfile_imagesSelection/>
            <ProfileInputField/>
        </div>
    );
}

export default DashboardPage;
