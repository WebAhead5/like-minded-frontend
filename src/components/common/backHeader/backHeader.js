import React from 'react';
import './backHeader.css'
import {history} from "../../../tools/history";


function BackHeader({href,children}) {
    return (
        <div className={"backHeader"}>
            <div className={"backHeader_imageContainer"} onClick={()=>history.push(href)} >
                <img className={"backHeader_image"} src="/images/icon-back.svg  " alt="back button"/>
            </div>

            <div>
                {children}
            </div>

        </div>
    );
}

export default BackHeader;