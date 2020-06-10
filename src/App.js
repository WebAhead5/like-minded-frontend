//react imports--------------------------------------------------------------------
import React, {useState} from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";

//recoil imports-------------------------------------------------------------------

//pages----------------------------------------------------------------------------------
import AuthRoutes from "./components/routes/authRoutes";
import ProfileRoutes from "./components/routes/profileRoutes";
import Settings from './components/pages/settings/settings'
import NavBar from "./components/common/navBar/navBar";

import {
     useRecoilValue,
} from 'recoil';
import {loggedInState} from "./tools/recoil/recoilStates";





function App() {
    const isLoggedIn = useRecoilValue(loggedInState)

    return (
        <div>
            {/* {isLoggedIn? <NavBar/>: null } */}
            <NavBar/>
            <AuthRoutes/>
            <ProfileRoutes/>
            <Settings/>
        </div>
    );
}

export default App;
