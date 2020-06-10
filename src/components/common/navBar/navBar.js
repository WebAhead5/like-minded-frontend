import React from 'react';
import {Link} from "react-router-dom";
import {useRecoilState} from "recoil";
import {currentRouteState} from "../../../tools/recoil/recoilStates";

function NavBar(props) {

    const [currentRoute, setRoute] = useRecoilState(currentRouteState)

    return (
        <nav>
            <a onClick={()=>setRoute("/profile")}>
                <img src="/images/icon-nav-profile.png" alt=""/>
            </a>

            <a onClick={()=>setRoute("/dashboard")}>
                <img src="/images/img-logo-192.png" alt=""/>
            </a>

            <a onClick={()=>setRoute("/chat")}>
                <img src="/images/icon-nav-chat.png" alt=""/>
            </a>



        </nav>
    );
}

export default NavBar;