import React from 'react';
import {Route} from "react-router-dom";
import IfLoggedIn from "../helpers/IfLoggedIn";
import {history} from "../../tools/history";
import DashboardPage from "../pages/dashboardPage/dashboardPage";
import SettingsPage from "../pages/settingsPage/settingsPage";

function MainRoutes({data,loadData}) {
    return (
        <div>
            <Route exact path="/">
                <IfLoggedIn cb={() =>
                    loadData(() => history.push("/dashboard"))  }
                            elseCb={() => history.push("/login")}/>

            </Route>

            <Route exact path="/dashboard">
                <IfLoggedIn elseCb={()=>history.push("/login")} >
                    <DashboardPage data={data}/>
                </IfLoggedIn>
            </Route>


            <Route exact path="/settings">
                <IfLoggedIn elseCb={()=>history.push("/login")} >
                    <SettingsPage data={data} loadData={loadData}/>
                </IfLoggedIn>
            </Route>

        </div>
    );
}

export default MainRoutes;