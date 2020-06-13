import React from 'react';
import ConversationEntry from "../conversationEntry/conversationEntry";

function PendingEntry({profile, onLikeClick, onDislikeClick, onElementClick}) {


    return (
        <div className={"pendingPage"}>
            <ConversationEntry profile={profile} showNew={false} onElementClick={onElementClick}/>
            <div className={"pendingPage_iconsContainer"}>
                <img className={"pendingPage_icon"} src={"/images/icon-heart.svg"} alt={"like"} onClick={onLikeClick}/>
                <img className={"pendingPage_icon"} src={"/images/icon-stop.svg"} alt={"like"} onClick={onDislikeClick}/>
            </div>

        </div>
    );
}

export default PendingEntry;