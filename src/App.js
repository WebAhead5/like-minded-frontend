//react imports--------------------------------------------------------------------
import React, {useState} from 'react';

//recoil imports-------------------------------------------------------------------
import {
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import {loggedInState, profileState, currentRouteState} from "./tools/recoil/recoilStates";
//pages----------------------------------------------------------------------------------
import AuthRoutes from "./components/routes/authRoutes";
import ProfileRoutes from "./components/routes/profileRoutes";
import NavBar from "./components/common/navBar/navBar";



function App() {



    const isLoggedIn = useRecoilValue(loggedInState)
    const [profile, setProfile] = useRecoilState(profileState)

    return (
        <div>
            {isLoggedIn? <NavBar/> : null}
            <AuthRoutes/>
            <ProfileRoutes/>
        </div>
    );
}

export default App;
