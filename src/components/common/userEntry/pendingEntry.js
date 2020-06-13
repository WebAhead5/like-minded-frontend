import React from 'react';
import "./pendingEntry.css"
import UserEntry from "./userEntry";

function PendingEntry({profile, onLikeClick, onDislikeClick, onClick}) {


    return (
        <UserEntry className="pendingPage" onClick={onClick} profile={profile}>
            <div className="pendingPage_buttonsContainer">
                <div className="pendingPage_button">
                    <img className="pendingPage_buttonImg" src={"/images/icon-heart.svg"} alt={"like"}
                         onClick={onLikeClick}/>
                </div>
                <div className="pendingPage_button">
                    <img className="pendingPage_buttonImg" src={"/images/icon-stop.svg"} alt={"like"}
                         onClick={onDislikeClick}/>
                </div>

            </div>

        </UserEntry>
    );
}

export default PendingEntry;