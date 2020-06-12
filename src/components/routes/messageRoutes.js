//react imports------------------------------------------------
import React from 'react';
import { Route, Switch} from "react-router-dom";

//pages imports------------------------------------------------
import MessagesPage from "../pages/messagesPage/messagesPage";

//helper components import-------------------------------------
import IfLoggedOut from "../helpers/IfLoggedOut";

//module imports-----------------------------------------------
import {history} from "../../tools/history";
import {LoginPage} from "../pages/loginPage/loginPage";

function MessageRoutes() {

    return (
        <Switch>
            <Route exact path="/chat" render={()=>
                <IfLoggedOut cb={()=>history.push("/login")} ><MessagesPage/></IfLoggedOut>
            }/>
        </Switch>
    );
}

export default MessageRoutes;