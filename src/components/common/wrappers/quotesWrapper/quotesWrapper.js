import React from 'react';
import './quotesWrapper.css'
function QuotesWrapper({children,className}) {
    return (
        <q className={`quotesWrapper ${className}`}>
            {children}
        </q>
    );
}

export default QuotesWrapper;