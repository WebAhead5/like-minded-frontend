import React from 'react'
import InputFieldWrapper from "../../common/inputFieldWrapper/inputFieldWrapper";
import TextField from "../../common/textField/textField";
import "./registerPage.css"
import "../../../index.css"

export function RegisterPage() {


    return <div className={"register"}>

        <div className={"register_logoContainer"}>
            <img src={"/images/img-logo-512.png"} alt={"logo"} className={"register_logo"}/>
            <h1>like minds</h1>
            <h4>Helping to connect like-minded personalities</h4>
        </div>

        <form className={"register_inputFields"}>
            <InputFieldWrapper>
                <TextField title={"Email"} inputType={"Email"} placeHolder={"Enter your email..."}/>
            </InputFieldWrapper>
            <InputFieldWrapper>
                <TextField title={"password"} inputType={"password"} placeHolder={"Enter your password..."}/>
            </InputFieldWrapper>

            <input type="button" value={"Login"} className={"blackBtn roundedCorners_lite register_button"}/>
            <input type="button" value={"Register"} className={"blackBtn roundedCorners_lite register_button"}/>

            <hr/>

            <input type="button" value={"Sign in with Google"}
                   className={"orangeBtn roundedCorners_lite register_button"}/>

        </form>


    </div>


}
