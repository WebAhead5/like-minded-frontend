import React from 'react';
import {Redirect, Route,Switch} from "react-router-dom";
import * as states from "../../tools/recoil/recoilStates";
import {useRecoilValue} from "recoil";
import EditProfilePage from "../pages/editProfilePage/editProfilePage";
import ProfilePage from "../pages/profile/profilePage";


function ProfileRoutes(props) {

    const isLoggedIn = useRecoilValue(states.loggedInState)



    return (
        <Switch>

            <Route exact path="/profile" render={(props) => {
                if (isLoggedIn)
                    return  <ProfilePage/>

                // return <Redirect to={"/login"}/>
            }}/>


            <Route exact path="/profile/edit" render={(props) => {
                if (isLoggedIn)
                    return < EditProfilePage />

                return <Redirect to={"/login"}/>
            }}/>

        </Switch>
    );
}

export default ProfileRoutes;