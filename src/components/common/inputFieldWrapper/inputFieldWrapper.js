import React from 'react';
import "./inputFieldWrapper.css"
// const {useState, useEffect} = React;

function InputFieldWrapper({children}) {


    return (
        <div className='fieldWrapper'>
            <p className='fieldWrapper_content'>
                {children}
            </p>
            <img className='fieldWrapper_corner' src="/images/img-field-corner.png" alt="corner"/>
        </div>
    );


}

export default InputFieldWrapper;
