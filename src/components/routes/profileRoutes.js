import React from 'react';
import {Route, Switch} from "react-router-dom";
import EditProfilePage from "../pages/editProfilePage/editProfilePage";
import ProfilePage from "../pages/profile/profilePage";
import {history} from "../../tools/history";
import IfLoggedIn from "../helpers/IfLoggedIn";

function ProfileRoutes({data}) {


    return (
        <Switch>
            <Route exact path="/profile">
                <IfLoggedIn elseCb={() => history.push("/login")}>
                    <ProfilePage data={data}/>
                </IfLoggedIn>
            </Route>

            <Route exact path="/profile/edit">
                <IfLoggedIn elseCb={() => history.push("/login")}>
                    <EditProfilePage data={data} />
                </IfLoggedIn>
            </Route>

        </Switch>
    );
}

export default ProfileRoutes;