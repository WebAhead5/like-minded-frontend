//react imports--------------------------------------------------------------------
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

//recoil imports-------------------------------------------------------------------
import {
    RecoilRoot,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import "./tools/recoil/recoilStates"
import {LoginPage} from "./components/pages/loginPage/loginPage";
import Dashboard from "./components/pages/dashboard/dashboard";

import EditProfilePage from "./components/pages/editProfilePage/editProfilePage"
// import {reduce} from 'immer'



function App() {

    return (
        <RecoilRoot>
            <div>
                <Switch>
                    <Route exact  path="/login/successful"  >
                        test
                    </Route>
                    <Route exact  path="/login">
                        <LoginPage />
                    </Route>

                    <Route exact  path="/dashboard">
                        <Dashboard />
                    </Route>

                    <Route path="/editProfile">
                        <EditProfilePage />
                    </Route>

                    <Route  exact  path="/">
                        home
                    </Route>


                </Switch>
            </div>
        </RecoilRoot>
    );
}

export default App;
