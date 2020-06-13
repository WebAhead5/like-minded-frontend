import React, {useEffect,useState} from 'react';
import BackHeader from "../../common/backHeader/backHeader";
import {history} from "../../../tools/history";
import CandidateSuggestion from "../../common/candidateSuggestion/candidateSuggestion";
import "./otherUserProfile.css"


function OtherUserProfile({data: {messages,pendingLikes}}) {

    const [profile, setProfile] = useState(undefined);

    useEffect(()=>{
        let id =     new window.URL(window.location.href).searchParams.get("id")
        let filter = [...messages,...pendingLikes].filter(x=>x.profile.userid == id)
        if(filter.length === 0)
            history.push("/");
        else
            setProfile(filter[0].profile)

    },[])


    return (
        <div className="otherUserProfile">
            <BackHeader href={"/chats"} >
                {profile && profile.firstname} {profile && profile.lastname}
            </BackHeader>
            {profile && <CandidateSuggestion profile={profile} className="otherUserProfile_profile" expanded={true} expandable={false} />}

        </div>
    );
}

export default OtherUserProfile;