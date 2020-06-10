//react imports--------------------------------------------------------------------
import React, { useState, Fragment } from 'react';
import {
    Switch,
    Route, Redirect,
} from "react-router-dom";

//recoil imports-------------------------------------------------------------------

//pages----------------------------------------------------------------------------------
import AuthRoutes from "./components/routes/authRoutes";
import ProfileRoutes from "./components/routes/profileRoutes";
import MessageRoutes from "./components/routes/messageRoutes";



import {
    useRecoilValue,
} from 'recoil';
import { loggedInState } from "./tools/recoil/recoilStates";
import NavBar from "./components/common/navBar/navBar";
import Dashboard from "./components/pages/dashboard/dashboard";
import CandidateImages from "./components/common/candidateImages/candidateImages"
import ProfileGallery from "./components/common/profileGallery/profileGallery"
import ProfileInputField from './components/common/profileInputField/profileInputField';




function App() {
    const isLoggedIn = useRecoilValue(loggedInState)

    return (
        <div>


            {isLoggedIn ? <NavBar /> : null}

            <Route exact path="/dashboard" render={() => {
                // if(isLoggedIn)
                //     return  <Dashboard/>
                // return <Redirect to={"/login"}/>
                return (
                    <Fragment>
                        <NavBar />
                        <ProfileGallery />
                        <ProfileInputField />

                    </Fragment>
                )

            }} />

            <AuthRoutes />
            <ProfileRoutes />
            <MessageRoutes />

        </div>
    );
}

export default App;
