import React from 'react';
import "./profileInputField.css"
const { useState } = React;

function profileInputField({ canEdit, onChange
    , content, title, placeHolder, rowCount }) {

    // const [content, setContent] = useState("")

    return (
        <div className='textField' >
            <form>
                <label for="profileDescription">Describe yourself in a sentence</label>
                <input type="text" id="profileDescription" name="profileDescription" placeholder="100 characters"></input>
                <label for="bio">bio</label>
                <textarea name="bio" cols="30" rows="5" placeholder="100 characters"></textarea>
                <label for="occupation">occupation</label>
                <input type="text" id="occupation" name="occupation" placeholder="100 characters"></input>
            </form>
        </div>
    );
}

export default profileInputField;
