import React from 'react';
import "./conversationEntry.css";
import  moment from "moment"
import UserEntry from "./userEntry";

function ConversationEntry({profile, lastMessage, onClick}) {
    return (
        <UserEntry onClick={onClick} profile={profile}  className="messagePreviews">

            {lastMessage && <span className="conversationEntry_text conversationEntry_message">{lastMessage?.message}</span>}
            {lastMessage && <span className="conversationEntry_text conversationEntry_timestamp">{moment(lastMessage?.timeAndDate).fromNow()}</span>}
            {!lastMessage && <div className="conversationEntry_new">NEW</div>}


        </UserEntry>

    );
}


export default ConversationEntry;