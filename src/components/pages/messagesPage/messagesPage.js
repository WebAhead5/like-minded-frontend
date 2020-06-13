import "./messagesPage.css"
import "../../../index.css"
import React, {useEffect} from "react";
import ConversationEntry from "../../common/conversationEntry/conversationEntry";
import {Link} from "react-router-dom";
import {history} from "../../../tools/history";


function MessagesPage({data: {chats, pendingLikes}}) {


    return (
        <div className="messagesPage">



            <div className={"messagesPage_entries"}>

                {
                    pendingLikes.length ?
                        <button className="messagesPage_pending orangeBtn roundedCorners_lite" onClick={()=>history.push("/pending")} >pending ({pendingLikes.length})</button>
                        : null
                }

                {chats.map((entry, index) =>
                    <div className={"messagesPage_entry"} key={index}>
                        <ConversationEntry profile={entry.profile} lastMessage={entry.lastMessageData}/>
                    </div>
                )}
            </div>


        </div>

    );
}

export default MessagesPage;