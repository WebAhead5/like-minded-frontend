import React from "react";
import "./dashboardQuizSummary.css";
const { useState } = React;

function DashboardQuizSummary({ userProfile }) {

    const [expandedState, setExpandedState] = useState(false)

    return (
        <div className="dashboardQuizSummary">
            <p className="banner">Take more quizzes to get more accurate matches</p>
            <div className="quizMatchPreview">
                <p className="quizTitle">Myers Briggs Test</p>
                <div className="percentageContainer">
                <p className="percentage">0%</p>
                <p className="complete">complete</p>
                </div>
            </div>

        </div>
    )
}

export default DashboardQuizSummary;