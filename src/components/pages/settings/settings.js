import SettingsInputs from "../../notDone/SettingsInputs/SettingsInputs"
import "./settings.css"
import React, { Fragment } from "react";


// import "./";
const { useState } = React;

function Settings({ getAllmatches }) {
    // const [content, setContent] = useState("")

    return (
        <Fragment>
            <SettingsInputs className="messages_blocks" />
        </Fragment>
    );
}

export default Settings;
