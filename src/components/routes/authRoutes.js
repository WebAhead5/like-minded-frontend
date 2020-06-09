import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {LoginPage} from "../pages/loginPage/loginPage";
import {loggedInState} from "../../tools/recoil/recoilStates";
import {useRecoilValue} from "recoil";
import Axios from "axios";


function AuthRoutes(props) {
    const isLoggedIn = useRecoilValue(loggedInState)

    function logout() {
        (async function () {
         let {data:{ok}} = await Axios.get("/api/auth/logout")
            console.log(ok)
                return <Redirect to={"/login"}/>

        })()
    }
    return (
        <div>

            //auth routes---------------------------------------------------------------------------------------


            <Route  exact  path="/register">
                register
            </Route>

            <Route exact  path="/login">

                <LoginPage />

            </Route>

            <Route exact  path="/login/successful"  >
                {/*{isLoggedIn && fetchUserData()}*/}
            </Route>

            <Route exact  path="/logout">
                {isLoggedIn?logout(): <Redirect to={"/login"} /> }
            </Route>


        </div>
    );
}

export default AuthRoutes;