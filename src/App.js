//react imports--------------------------------------------------------------------
import React, {useState} from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

//recoil imports-------------------------------------------------------------------
import {
    RecoilRoot,
    selector,
    useRecoilState,
    useRecoilValue, useSetRecoilState,
} from 'recoil';
import {loggedInState, profileState} from "./tools/recoil/recoilStates";

//pages----------------------------------------------------------------------------------
import AuthRoutes from "./components/routes/authRoutes";



function App() {



    return (
            <div>
                <Switch>
                    <Route  exact  path="/">
                        home
                    </Route>

                    <Route exact path="/editProfile">
                        {/*{isLoggedIn?  <EditProfilePage /> :<Redirect to={"/login"}/> }*/}
                    </Route>

                    <AuthRoutes/>

                </Switch>
            </div>
    );
}

export default App;
