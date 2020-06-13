import React from 'react';
import "./profileInputField.css"

function ProfileInputField({
                               canEdit = true,
                               onChange,
                               content = "",
                               title, placeHolder = "",
                               rowCount = 1,
                               className
                           }) {


    function textField() {
        return <input
            readOnly={!canEdit}
            name={title}
            type={"text"}
            value={content}
            placeholder={placeHolder}
            onChange={(e) => onChange && onChange(e.target.value)}/>

    }


    function textarea() {
        return <textarea
            readOnly={!canEdit}
            name={title}
            placeholder={placeHolder}
            value={content}
            rows={rowCount}
            onChange={(e) =>  onChange && onChange(e.target.value)}/>

    }

    return (
        <div className={`profileInputField ${className}`}>
            <label htmlFor={title}>{title}</label>
            {rowCount === 1 ? textField() : textarea()}
        </div>
    );
}

export default ProfileInputField;
