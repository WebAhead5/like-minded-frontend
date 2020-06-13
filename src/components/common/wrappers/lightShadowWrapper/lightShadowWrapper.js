import React from 'react';
import "./lightShadowWrapper.css"
function LightShadowWrapper({children,className, onClick}) {
    return (
        <div className={`smallEntryWrapper ${className}`} onClick={onClick}>
            {children}
        </div>
    );
}

export default LightShadowWrapper;

