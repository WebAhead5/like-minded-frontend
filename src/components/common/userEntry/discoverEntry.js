import React from 'react';
import LightShadowWrapper from "../wrappers/lightShadowWrapper/lightShadowWrapper";
import CircularImage from "../circularImage/circularImage";
import "./discoverEntry.css"
import QuotesWrapper from "../wrappers/quotesWrapper/quotesWrapper";

function DiscoverEntry({profile: {primaryphoto, firstname, lastname, status}, onclick}) {
    return (
        <div>

            <LightShadowWrapper onClick={onclick} className="discoverEntry_box">

                <div className="discoverEntry_content">
                    <CircularImage src={primaryphoto} className="discoverEntry_img"/>
                    <span className="candidateName">{firstname} {lastname}</span>
                    {/* todo <p className="distance">5km Away</p> */}
                    <QuotesWrapper>{status}</QuotesWrapper>
                </div>


                <div className="discoverEntry_readMore">
                    <span>Read more</span>
                </div>

                <img src="/images/icon-arrow-down.svg" alt="downArrow" className={"discoverEntry_downArrow"}/>

            </LightShadowWrapper>
            
        </div>
    );
}

export default DiscoverEntry;