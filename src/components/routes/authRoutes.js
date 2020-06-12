//react imports------------------------------------------------
import React, {Fragment} from 'react';
import { Route,Switch } from "react-router-dom";

//recoil imports-----------------------------------------------
import {useRecoilValue, useResetRecoilState, useSetRecoilState} from "recoil";
import * as states from "../../tools/recoil/recoilAtoms";

//pages imports------------------------------------------------
import {LoginPage} from "../pages/loginPage/loginPage";
import {RegistrationPage} from "../pages/registrationPage/registrationPage";

//helper components import-------------------------------------
import IfLoggedIn from "../helpers/IfLoggedIn";
import IfLoggedOut from "../helpers/IfLoggedOut";

//module imports-----------------------------------------------
import {history} from "../../tools/history";
import {getLoggedInUserData, logout} from "../../tools/data";
import Axios from "axios";



function AuthRoutes(props) {


    const  setProfile = useSetRecoilState(states.profileState)
    const  setSettings = useSetRecoilState(states.settingsState)
    const  setChats = useSetRecoilState(states.chatsSettings)
    const  resetProfile = useResetRecoilState(states.profileState)
    const  resetSettings = useResetRecoilState(states.settingsState)
    const  resetChats = useResetRecoilState(states.chatsSettings)

     function  fetchUserDateCB() {
         getLoggedInUserData().then(({profile, settings, chats}) => {
             setProfile(profile)
             setSettings(settings)
             setChats(chats)
             history.push("/dashboard")
         })

     }
     function  logoutCB() {
         logout().then(
             () => {
                 resetProfile()
                 resetSettings()
                 resetChats()
                 history.push("/login")
             })
     }


    return (
        <Switch>

            <Route exact path="/login/successful">
                <IfLoggedIn elseCb={()=>history.push("/login")}
                            cb={fetchUserDateCB } />
            </Route>
            <Route exact path="/logout">
                <IfLoggedIn elseCb={()=>history.push("/login")}
                            cb={logoutCB } />
            </Route>


            <Route exact path="/register" render={()=>
                <IfLoggedOut elseCb={()=>history.push("/dashboard")} ><RegistrationPage/></IfLoggedOut>
            }/>


            <Route exact path="/login" render={()=>
                <IfLoggedOut elseCb={()=>history.push("/dashboard")} ><LoginPage/></IfLoggedOut>
            }/>

        </Switch>
    );

}

export default AuthRoutes;