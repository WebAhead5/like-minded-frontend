import React from "react";
import CandidateSuggestion from "../../common/candidateSuggestion/candidateSuggestion";
import "./dashboardPage.css"
function DashboardPage({data:{potentialMatches,setRelationship}}) {

    if(potentialMatches && potentialMatches.length === 0)
        return <div>
            no potential matches were found at the moment, please try again later...
        </div>
    return (
        <div className="dashboard">

            <p>Discover</p>
            <div className="dashboard_SuggestionContainer" >
                <div className="dashboard_button dashboard_like_button" onClick={()=>setRelationship(potentialMatches[0].profile.userid, "like")}>
                    like
                </div>
                <CandidateSuggestion profile={potentialMatches[0].profile}  className="dashboard_Suggestion"/>
                <div className="dashboard_button dashboard_dislike_button" onClick={()=>setRelationship(potentialMatches[0].profile.userid, "block")}>
                    skip
                </div>

            </div>
        </div>
    );
}

export default DashboardPage;
