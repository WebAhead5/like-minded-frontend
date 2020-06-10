import React from 'react';
import Messages from "../pages/messages/messages";
import {Redirect, Route, Switch} from "react-router-dom";
import {useRecoilValue} from "recoil";
import * as states from "../../tools/recoil/recoilStates";

function MessageRoutes(props) {
    const isLoggedIn = useRecoilValue(states.loggedInState)

    return (
        <Switch>

            <Route exact path="/chat" render={() => {
                if (isLoggedIn)
                    return <Messages/>

                return <Redirect to={"/login"}/>

            }}/>

        </Switch>
    );
}

export default MessageRoutes;