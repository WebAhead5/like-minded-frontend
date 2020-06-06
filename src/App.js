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
import ProfileInputField from "./components/common/profileInputField/profileInputField";
import ProfileGallery from "./components/common/profileGallery/profileGallery"
import EditProfilePage from "./components/pages/editProfilePage/editProfilePage"
import Messages from "./components/pages/messages/messages"

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

                    <Route path="/editProfile">
                        <EditProfilePage />
                    </Route>

                    <Route path="/messages">
                        <Messages />
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
