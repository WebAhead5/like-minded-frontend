//react imports--------------------------------------------------------------------
import React, {useState} from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";

//recoil imports-------------------------------------------------------------------

//pages----------------------------------------------------------------------------------
import AuthRoutes from "./components/routes/authRoutes";
import ProfileRoutes from "./components/routes/profileRoutes";
import MatchPopup from "./components/common/matchPopup/matchPopup"




import {
     useRecoilValue,
} from 'recoil';
<<<<<<< HEAD
import "./tools/recoil/recoilStates"
import {LoginPage} from "./components/pages/loginPage/loginPage";
import ProfileInputField from "./components/common/profileInputField/profileInputField";
import ProfileGallery from "./components/common/profileGallery/profileGallery"
import EditProfilePage from "./components/pages/editProfilePage/editProfilePage"
import Messages from "./components/pages/messages/messages"

// import {reduce} from 'immer'
=======
import {loggedInState} from "./tools/recoil/recoilStates";
import NavBar from "./components/common/navBar/navBar";
>>>>>>> master



function App() {
    const isLoggedIn = useRecoilValue(loggedInState)

    return (
<<<<<<< HEAD
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
=======
        <div>
            {isLoggedIn? <NavBar/>: null }
            <AuthRoutes/>
            <ProfileRoutes/>
            <MatchPopup/>

        </div>
>>>>>>> master
    );
}

export default App;
