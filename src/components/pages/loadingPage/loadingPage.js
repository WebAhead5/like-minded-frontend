import React from 'react';
import "./loadingPage.css"
function LoadingPage(props) {
    return (
        <div className="loadingPage">
            <img src="/images/anim-loading.svg" alt="loading image"/>
            loading...
        </div>
    );
}

export default LoadingPage;