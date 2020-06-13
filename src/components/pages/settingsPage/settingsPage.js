import React from 'react';
import "../../../index.css"
import {history} from "../../../tools/history";
import {logout} from "../../../tools/data";
import "./settingsPage.css"
function SettingsPage({loadData,settings,setSettings}) {
    return (
        <div className="settingsPage">

        <div className="orangeBtn roundedCorners_lite settingsPage_btn" onClick={()=> logout().then(()=>{
            loadData();
            history.push("/") //todo can remove this line
        })}>
            logout
        </div>

        </div>
    );
}

export default SettingsPage;