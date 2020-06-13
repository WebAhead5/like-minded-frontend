import React from 'react';
import "../messagesPage/messagesPage.css"
import "./pendingPage.css"
import PendingEntry from "../../common/pendingEntry/pendingEntry";
import {logout} from "../../../tools/data";

function PendingPage({data:{pendingLikes,setPendingLikes}}) {
    return (
        <div>

            <div className={"messagesPage"}>
            {
                pendingLikes.map(({profile,id})=>
                    <div className={"messagesPage_entry"} key={id}>
                        {console.log(profile)}
                        <PendingEntry  profile={profile} onLikeClick={()=>setPendingLikes(profile.userid,"like")} />
                    </div>
                )
            }
            </div>
        </div>
    );
}

export default PendingPage;