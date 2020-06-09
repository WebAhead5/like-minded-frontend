import React, {useState} from 'react';
import {Redirect, Route,Switch , BrowserRouter as Router} from "react-router-dom";
import {LoginPage} from "../pages/loginPage/loginPage";
import {loggedInState, profileState, settingsState} from "../../tools/recoil/recoilStates";
import {useRecoilState, useRecoilValue} from "recoil";
import Axios from "axios";
import RegisterPage from "../pages/RegisterPage/RegisterPage";


function AuthRoutes(props) {
    const isLoggedIn = useRecoilValue(loggedInState)
    const [profile, setProfile] = useRecoilState(profileState)
    const [settings, setSettings] = useRecoilState(settingsState)

    function fetchUserDate(cb) {


        Axios.get("/api/auth/currentUser").then(({data:res}) => {
            console.log(res)
            if (res.ok) {
                setProfile(res.data.profile)
                setSettings(res.data.settings)
            }

             if(cb) cb()

        })
    }


    function logout(cb) {

        Axios.get("/api/auth/logout").then(({data: {ok}}) => {
            if(ok)
                console.log("logged out")
            if(cb) cb()
        })
    }


    return (
        <Switch>


            <Route exact path="/register" render={(props) => {
                if (isLoggedIn)
                    return  <Redirect to={"/dashboard"}/>

                return <RegisterPage />
            }}/>

            <Route exact path="/login/successful" render={(props) => {
                if (isLoggedIn)
                   return  fetchUserDate(()=>window.location="/login")

                return <Redirect to={"/login"}/>
            }}/>


            <Route exact strict path="/logout" render={(props) => {
                if (isLoggedIn)
                   return  logout(()=>window.location="/login")

                return <Redirect to={"/login"}/>

            }}/>


            <Route exact path="/login" render={(props) => {
                if (isLoggedIn)
                    return <Redirect to={"/dashboard"}/>

                return <LoginPage/>
            }}/>


        </Switch>
    );
}

export default AuthRoutes;