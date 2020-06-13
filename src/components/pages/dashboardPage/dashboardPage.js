import React from "react";
import CandidateSuggestion from "../../notDone/candidateSuggestion/candidateSuggestion";
import "./dashboardPage.css"
function DashboardPage({data}) {

    return (
        <div className="dashboard">

            <p>Discover</p>

            <CandidateSuggestion profile={data.profile}  className="dashboard_Suggestion"/>
        </div>
    );
}

export default DashboardPage;
