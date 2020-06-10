import React from 'react';
import * as states from "../../tools/recoil/recoilStates";
import {useRecoilState, useRecoilValue} from "recoil";
import EditProfilePage from "../pages/editProfilePage/editProfilePage";
import ProfilePage from "../pages/profile/profilePage";
import {currentRouteState} from "../../tools/recoil/recoilStates";
import RegisterPage from "../pages/RegisterPage/RegisterPage";


function ProfileRoutes(props) {

    const isLoggedIn = useRecoilValue(states.loggedInState)
    const [currentRoute, setRoute] = useRecoilState(currentRouteState)

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


            { currentRoute ==="/profile"?
                requireLogin("/login",()=> <ProfilePage/>)
                : ""}


            { currentRoute ==="/profile/edit"?
                requireLogin("/login",()=> < EditProfilePage />)
                : ""}



        </div>
    );
}

export default ProfileRoutes;