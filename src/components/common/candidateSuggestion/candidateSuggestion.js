import React, {Fragment, useState} from "react";
import "./candidateSuggestion.css";
import ProfileFields from "../../common/profileFields/profileFields";
import DiscoverEntry from "../../common/userEntry/discoverEntry";

function CandidateSuggestion({profile,className, expanded: initialExpanded = false, expandable = true}) {

    const [expanded, setExpanded] = useState(initialExpanded);
    return (
        <div className={`candidateSuggestion_content ${className}`}>

            <DiscoverEntry profile={profile} onclick={() => expandable && setExpanded(!expanded)}/>

            {
                expanded ?
                    <ProfileFields profile={profile} canEdit={false}/>
                    : ""
            }

        </div>
    )
}

export default CandidateSuggestion;