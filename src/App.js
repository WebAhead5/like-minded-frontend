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




import {
     useRecoilValue,
} from 'recoil';
import {loggedInState} from "./tools/recoil/recoilStates";
import NavBar from "./components/common/navBar/navBar";



function App() {
    const isLoggedIn = useRecoilValue(loggedInState)

    return (
        <div>
            {isLoggedIn? <NavBar/> : null}
            <AuthRoutes/>
            <ProfileRoutes/>
        </div>
    );
}

export default App;
