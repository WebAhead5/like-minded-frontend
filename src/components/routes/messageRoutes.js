//react imports------------------------------------------------
import React from 'react';
import {Route, Switch} from "react-router-dom";

//pages imports------------------------------------------------
import MessagesPage from "../pages/messagesPage/messagesPage";

//helper components import-------------------------------------
import IfLoggedIn from "../helpers/IfLoggedIn";

//module imports-----------------------------------------------
import {history} from "../../tools/history";


function MessageRoutes({data}) {
    return (
        <Switch>
            <Route exact path="/chats">
                <IfLoggedIn elseCb={() => history.push("/login")}>
                    <MessagesPage data={data}/>
                </IfLoggedIn>
            </Route>


        </Switch>
    );
}

export default MessageRoutes;