import React from 'react';
import {Redirect, Route,Switch} from "react-router-dom";
import * as states from "../../tools/recoil/recoilStates";
import {useRecoilValue} from "recoil";
import EditProfilePage from "../pages/editProfilePage/editProfilePage";


function ProfileRoutes(props) {

    const isLoggedIn = useRecoilValue(states.loggedInState)



    return (
        <Switch>

            <Route exact path="/profile" render={(props) => {
                if (isLoggedIn)
                    return  "needs implementing"

                // return <Redirect to={"/login"}/>
            }}/>


            <Route exact path="/editProfile" render={(props) => {
                if (isLoggedIn)
                    return < EditProfilePage />

                return <Redirect to={"/login"}/>
            }}/>

        </Switch>
    );
}

export default ProfileRoutes;