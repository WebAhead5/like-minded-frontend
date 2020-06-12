//react imports------------------------------------------------
import React, {Fragment} from 'react';
import {Route, Switch} from "react-router-dom";


//pages imports------------------------------------------------
import {LoginPage} from "../pages/loginPage/loginPage";
import {RegistrationPage} from "../pages/registrationPage/registrationPage";

//helper components import-------------------------------------
import IfLoggedIn from "../helpers/IfLoggedIn";
import IfLoggedOut from "../helpers/IfLoggedOut";

//module imports-----------------------------------------------
import {history} from "../../tools/history";
import {logout} from "../../tools/data";


function AuthRoutes() {




    return (
        <Switch>

            <Route exact path="/logout">
                <IfLoggedIn elseCb={() => history.push("/login")}
                            cb={()=>logout().then(()=> history.push("/"))   } />
            </Route>

            <Route exact path="/register">
                <IfLoggedOut elseCb={() => history.push("/dashboard")}><RegistrationPage/></IfLoggedOut>
            </Route>

            <Route exact path="/login">
                <IfLoggedOut elseCb={() => history.push("/dashboard")}><LoginPage/></IfLoggedOut>
            </Route>


        </Switch>
    );

}

export default AuthRoutes;