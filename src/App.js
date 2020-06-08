import React from 'react';
import InputFieldWrapper from "./components/inputFieldWrapper/inputFieldWrapper";

function App() {
    return (
        <div>

            <InputFieldWrapper>
                hello world
            </InputFieldWrapper>

            <InputFieldWrapper>
                <button>some text</button>
            </InputFieldWrapper>
        </div>
    );
}

export default App;
