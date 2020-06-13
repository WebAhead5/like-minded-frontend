import React from 'react';
import "../messagesPage/messagesPage.css"
import PendingEntry from "../../common/userEntry/pendingEntry";
import BackHeader from "../../common/backHeader/backHeader";
import {history} from "../../../tools/history";

function PendingPage({data:{pendingLikes,setRelationship}}) {
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
                                       onImgClick={ ()=> history.push(`/otherProfile?id=${profile.userid}`)}
                                       onLikeClick={()=>setRelationship(profile.userid,"like")}
                                       onDislikeClick={()=>setRelationship(profile.userid,"block")}
                        />
                    </div>
                )
            }
            </div>
        </div>
    );
}

export default PendingPage;