import React from 'react';
import "../messagesPage/messagesPage.css"
import PendingEntry from "../../common/userEntry/pendingEntry";
import BackHeader from "../../common/backHeader/backHeader";

function PendingPage({data:{pendingLikes,setPendingLikes}}) {
    return (
        <div>
            <BackHeader href={"/chats"} >
                pending requests
            </BackHeader>

            <div className="messagesPage">
            {
                pendingLikes.map(({profile},index)=>
                    <div className="messagesPage_entry" key={index}>
                        <PendingEntry  profile={profile}
                                       onLikeClick={()=>setPendingLikes(profile.userid,"like")}
                                       onDislikeClick={()=>setPendingLikes(profile.userid,"block")}
                        />
                    </div>
                )
            }
            </div>
        </div>
    );
}

export default PendingPage;