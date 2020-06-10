import ProfileInputField from "../../common/profileInputField/profileInputField";
import MessagesPreviews from "../../common/MessagesPreviews/MessagesPreviews"
import "./messages.css"
import React from "react";


// import "./";
const { useState } = React;

function Messages({ getAllmatches }) {
    // const [content, setContent] = useState("")



    return (
        <div className="messages">
         
        <MessagesPreviews className="messages_blocks" />
        </div>

    );
}

export default Messages;
