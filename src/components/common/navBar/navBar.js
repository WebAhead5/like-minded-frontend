import React from 'react';
import {Link} from "react-router-dom";

function NavBar(props) {
    
    
    
    return (
        <div>
            <Link to={"/profile"}>
                <img src="/images/icon-nav-profile.png" alt=""/>
            </Link>

            <Link to={"/dashboard"}>
                <img src="/images/img-logo-192.png" alt=""/>
            </Link>

            <Link to={"/chat"}>
                <img src="/images/icon-nav-chat.png" alt=""/>
            </Link>



        </div>
    );
}

export default NavBar;