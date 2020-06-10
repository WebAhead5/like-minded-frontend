import React from  'react';
import {LoginPage} from "../pages/loginPage/loginPage";
import * as states from "../../tools/recoil/recoilStates";
import {useRecoilState, useRecoilValue} from "recoil";
import Axios from "axios";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import {currentRouteState} from "../../tools/recoil/recoilStates";


function AuthRoutes(props) {
    const isLoggedIn = useRecoilValue(states.loggedInState)
    const [profile, setProfile] = useRecoilState(states.profileState)
    const [settings, setSettings] = useRecoilState(states.settingsState)
    const [currentRoute, setRoute] = useRecoilState(currentRouteState)
    let fetching = false;

    function fetchUserDate(cb) {
        if (fetching)
            return;
        fetching = true;
        Axios.get("/api/auth/currentUser").then(({data: res}) => {

            if (res.ok) {
                setProfile(res.data.profile)
                setSettings(res.data.settings)
            }
            if (cb) cb()

        })
    }


    function logout(cb) {

        Axios.get("/api/auth/logout").then(({data: {ok}}) => {
            if (ok)
                console.log("logged out")
            if (cb) cb()
        })
    }

    function requireLogin(redirectionRoute, cb) {
        if (isLoggedIn)
            if (cb)
                return cb();
            else setRoute(redirectionRoute)

    }
    function requireLoggedOut(redirectionRoute, cb) {
        if (!isLoggedIn)
            if (cb)
                return cb();
            else setRoute(redirectionRoute)
    }

    return (
        <div>

            { currentRoute ==="/register"?
                requireLoggedOut("/dashboard",()=><RegisterPage/>)
                : ""}



            { currentRoute ==="/login/successful"?
                requireLogin("/login",()=>setRoute("/dashboard"))
                : ""}


            { currentRoute ==="/logout"?
                requireLogin("/login",()=>setRoute("/login"))
                : ""}



            { currentRoute ==="/login"?
                requireLoggedOut("/dashboard",()=><LoginPage/>)
                    : ""}


        </div>
    );
}

export default AuthRoutes;