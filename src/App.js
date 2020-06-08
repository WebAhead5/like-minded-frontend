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
import "./recoil/recoilStates"
import {RegisterPage} from "./components/pages/registerPage/registerPage";

// import {reduce} from 'immer'



function App() {

    return (
        <RecoilRoot>
            <div>
                <Switch>
                    <Route path="/register">
                        <RegisterPage />
                    </Route>

                    <Route path="/">
                        <Redirect to="/register" />
                    </Route>


                </Switch>
            </div>
        </RecoilRoot>
    );
}

export default App;
