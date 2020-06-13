import React from 'react';
import "./textField.css"

function TextField({title,placeHolder,inputType, onInput,value }) {


    return (
        <div className='textField' >
            <label htmlFor="title">{title}</label>
            <input type={inputType} name={title} placeholder={placeHolder || ""} value={value||""} onChange={(event => {
                // setContent(event.target.value);
                onInput(event.target.value)
            })}/>
        </div>
    );


}

export default TextField;
