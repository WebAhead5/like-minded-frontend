import React from "react";
import CandidateImages from "../../notDone/candidateImages/candidateImages";
import CandidateSuggestion from "../../notDone/candidateSuggestion/candidateSuggestion";

function DashboardPage({data}) {

    return (
        <div className="dashboard ">
            needs work
            {/*<CandidateImages />*/}
            <CandidateSuggestion data={data}/>
            {/*<DashboardQuizSummary />*/}
        </div>
    );
}

export default DashboardPage;
