import React from 'react';
import "./profileInputField.css"

function profileInputField({ canEdit = true, onChange
    , content ="", title, placeHolder="", rowCount=1 }) {

    // const [content, setContent] = useState("")
    function textField() {
        return <input
                      name={title}
                      type={"text"}
                      value={content}
                      placeholder={placeHolder}
                      onChange={(e) => canEdit && onChange && onChange(e.target.value)}/>

    }
    function textarea () {
        return <textarea
                      name={title}
                      placeholder={placeHolder}
                      value={content}
                      rows={rowCount}
                      onChange={(e) => canEdit && onChange && onChange(e.target.value)}/>

    }
    return (
        <div className='profileInputField' >
            <label htmlFor={title}>{title}</label>
            {rowCount===1? textField() : textarea()}
        </div>
    );
}

export default profileInputField;
