import React, {Fragment} from 'react';
import "./ocnversationEntry.css";

const defaultImage = "/images/defaultImageProfile.png";

function ConversationEntry({profile, lastMessage, showNew = true, showLastMessage = true, onElementClick}) {
    return (
        <div onClick={onElementClick}>
            <div className="messagePreviews">
                <div>
                    <img className={"messagePreviews_profileImage"} src={profile?.primaryphoto || defaultImage}/>
                </div>
                <div className="messagePreviews_nameAndMessage">
                    <p className="messagePreviews_candidateName">{profile?.firstname} {profile?.lastname}</p>
                    <p id="messagePreviews_messagePreview">{lastMessage?.message}</p>
                </div>

                {
                    showLastMessage || showNew?
                    <div className="messagePreviews_newAndTime">
                        <p className="messagePreviews_new">{showNew && !lastMessage ? "NEW" : ""}</p>
                        <p id="timeSince">{showLastMessage ? lastMessage?.timeAndDate : null}</p>
                    </div>

                        :null
                }
            </div>

        </div>
    );
}


export default ConversationEntry;