import React, { useEffect, useState } from "react";
import Axios from "axios";
import InputFieldWrapper from "../../common/inputFieldWrapper/inputFieldWrapper";
import TextField from "../../common/textField/textField";
import "./registration.css"
import "../../../index.css"
import { Redirect } from "react-router-dom";

export function Registration() {

    const [form, setForm] = useState({});
    const [error, setError] = useState("");
    const [disableInput, setDisableInput] = useState(false)
    const [redirect, setRedirect] = useState("")


    function onSubmit(e) {
        e.preventDefault()
        if (disableInput)
            return;
        setDisableInput(true)
        Axios.post("/api/auth/login", form)
            .then(({ data }) => {
                if (data.ok)
                    setRedirect("/login/successful")

                else
                    setError(data.message)

                setDisableInput(false)

            })
            .catch(err => {
                console.log(err)
            })
        e.preventDefault();

    }

    return <div className={"register"}>

        <div className={"register_logoContainer"}>
            <img src={"/images/img-logo-512.png"} alt={"logo"} className={"register_logo"} />
            <h4>Helping to connect like-minded personalities</h4>
        </div>
        <form className={"register_inputFields"} onSubmit={onSubmit} >
            <InputFieldWrapper>
                <TextField title={"Email"} inputType={"Email"} name={"email"} placeHolder={"Enter your email..."} value={form.email} onInput={(val) =>
                    !disableInput && setForm({ ...form, email: val })
                } />
            </InputFieldWrapper>
            <InputFieldWrapper>
                <TextField title={"password"} inputType={"password"} name={"password"} placeHolder={"Enter your password..."} value={form.password} onInput={(val) =>
                    !disableInput && setForm({ ...form, password: val })} />
            </InputFieldWrapper>
            <InputFieldWrapper>
                <TextField title={"confirm password"} inputType={"password"} name={"confirm-password"} placeHolder={"Confirm your password..."} value={form.password} onInput={(val) =>
                    !disableInput && setForm({ ...form, password: val })} />
            </InputFieldWrapper>
            <InputFieldWrapper>
                <div className="radioButtons textField">
                    <p>gender</p>
                    <div className="buttonsOnly">
                    <input type="radio" id="male" name="gender"></input>
                    <label className="genderLabel" for="male">Male
                    </label>
                    <input type="radio" id="female" name="gender"></input>
                    <label className="genderLabel" for="female">Female</label>
                    <input type="radio" id="other" name="gender"></input>
                    <label className="genderLabel" for="other">Other</label>
                    </div>
                </div>
            </InputFieldWrapper>
            <h2 className={"register_error"} >{error}</h2>
            <a href={"/api/auth/google"}> <input type="button" value={"Register"}
                className={"orangeBtn roundedCorners_lite register_button"} /></a>
            <p>Already have an account? <u>Login</u></p>
        </form>
        {redirect && < Redirect to={redirect} />}

    </div>


}
