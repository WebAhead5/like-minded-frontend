import React, {Fragment} from 'react';
import "./ocnversationEntry.css";

const defaultImage = "/images/defaultImageProfile.png";

function ConversationEntry({profile, lastMessage}) {
    console.log(lastMessage)
    return (
        <div>
            <div className="messagePreviews">
                <div>
                    <img className={"messagePreviews_profileImage"} src={profile?.primaryphoto || defaultImage}/>
                </div>
                <div className="messagePreviews_nameAndMessage">
                    <p className="messagePreviews_candidateName">{profile?.firstname} {profile?.lastname}</p>
                    <p id="messagePreviews_messagePreview">{lastMessage?.message}</p>
                </div>

                <div className="messagePreviews_newAndTime">
                    <p className="messagePreviews_new">{lastMessage?"":"NEW"}</p>
                    <p id="timeSince">{lastMessage?.timeAndDate}</p>
                </div>
            </div>

        </div>
    );
}



export default ConversationEntry;