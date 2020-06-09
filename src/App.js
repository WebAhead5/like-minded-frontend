//react imports--------------------------------------------------------------------
import React, {useState} from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

//recoil imports-------------------------------------------------------------------
import {
    RecoilRoot,
    selector,
    useRecoilState,
    useRecoilValue, useSetRecoilState,
} from 'recoil';
import {loggedInState, profileState} from "./tools/recoil/recoilStates";

//pages----------------------------------------------------------------------------------
import AuthRoutes from "./components/routes/authRoutes";
import EditProfilePage from "./components/pages/editProfilePage/editProfilePage";
import ProfileRoutes from "./components/routes/profileRoutes";



function App() {

    return (
        <div>
            <AuthRoutes/>
            <ProfileRoutes/>
        </div>
    );
}

export default App;
