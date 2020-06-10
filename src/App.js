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




import {
     useRecoilValue,
} from 'recoil';
import * as states from "./tools/recoil/recoilStates";
import TestComponent from "./components/testComponent";



function App() {
    const profile = useRecoilValue(states.profileState)

    return (
        <div>
            {JSON.stringify(profile)}


            <Switch>
                <Route exact path={"/dashboard"} render={() => {
                      return  <TestComponent/>
                    }}/>
            </Switch>


            <AuthRoutes/>
            <ProfileRoutes/>
        </div>
    );
}

export default App;
