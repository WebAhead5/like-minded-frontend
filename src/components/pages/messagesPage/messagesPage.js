import "./messagesPage.css"
import React, {useEffect} from "react";
import ConversationEntry from "../../common/conversationEntry/conversationEntry";


function MessagesPage({data}) {
    let {chats} = data

    return (
        <div className="messagesPage">

            <div>
                <p className="messagesPage_pending">pending (1)</p>
            </div>


            <div className={"messagesPage_entries"}>
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