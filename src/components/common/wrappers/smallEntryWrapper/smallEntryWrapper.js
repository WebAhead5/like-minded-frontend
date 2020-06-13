import React from 'react';
import "./smallEntryWrapper.css"
function SmallEntryWrapper({children,className, onClick}) {
    return (
        <div className={`smallEntryWrapper ${className}`} onClick={onClick}>
            {children}
        </div>
    );
}

export default SmallEntryWrapper;

