import React from 'react'
import InputFieldWrapper from "../../common/inputFieldWrapper/inputFieldWrapper";
import TextField from "../../common/textField/textField";
import "./registerPage.css"


export function RegisterPage() {



    return <div className={"register"}>
        <img src={"/images/img-logo-512.png"} alt={"logo"} className={"register_logo"} />
        <h1>like minds</h1>
        <h4>Helping to connect like-minded personalities</h4>

            <div className={"register_inputFields"}>
                <InputFieldWrapper>
                    <TextField title={"Email"} inputType={"Email"} placeHolder={"Enter your email..."} />
                </InputFieldWrapper>
                <InputFieldWrapper>
                    <TextField title={"password"} inputType={"password"} placeHolder={"Enter your password..."}/>

                </InputFieldWrapper>

            </div>


    </div>

}
