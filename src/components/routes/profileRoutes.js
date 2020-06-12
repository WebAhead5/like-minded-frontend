import React from 'react';
import { Route,Switch} from "react-router-dom";
import EditProfilePage from "../pages/editProfilePage/editProfilePage";
import ProfilePage from "../pages/profile/profilePage";
import {history} from "../../tools/history";
import IfLoggedIn from "../helpers/IfLoggedIn";
import {useRecoilValue} from "recoil";
import {profileState} from "../../tools/recoil/recoilAtoms";


function ProfileRoutes() {


    return (
        <Switch>
            <Route exact path="/profile" render={()=>
                <IfLoggedIn elseCb={()=>history.push("/login")} ><ProfilePage/></IfLoggedIn>
            }/>

            <Route exact path="/profile/edit" render={()=>
                <IfLoggedIn elseCb={()=>history.push("/login")} ><EditProfilePage/></IfLoggedIn>
            }/>

        </Switch>
    );
}

export default ProfileRoutes;