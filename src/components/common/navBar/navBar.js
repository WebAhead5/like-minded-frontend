import React from 'react';
import './navBar.css'
import {Link} from "react-router-dom";

function NavBar(props) {
    
    
    
    return (
        <div className="navBar">
            <Link to={"/profile"}>
                <img src="/images/icon-nav-profile.svg" alt=""/>
            </Link>

            <Link to={"/dashboard"}>
                <img className="logo" src="/images/img-logo-192.png" alt=""/>
            </Link>

            <Link to={"/chats"}>
                <img src="/images/icon-nav-chat.svg" alt=""/>
            </Link>



        </div>
    );
}

export default NavBar;