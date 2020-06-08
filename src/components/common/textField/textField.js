import React from 'react';
import "./textField.css"
const {useState}= React;

function TextField({title,placeHolder,inputType, onInput }) {

    const [content, setContent] = useState("")

    return (
        <div className='textField' >
            <label htmlFor="title">{title}</label>
            <input type={inputType} name={title} placeholder={placeHolder || ""} value={content} onInput={(event => {
                setContent(event.target.value);
                onInput(content)
            })}/>
        </div>
    );


}

export default TextField;
