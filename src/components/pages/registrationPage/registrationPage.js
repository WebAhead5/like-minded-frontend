import React, { useEffect, useState } from "react";
import Axios from "axios";
import InputFieldWrapper from "../../common/inputFieldWrapper/inputFieldWrapper";
import TextField from "../../common/textField/textField";
import "./registrationPage.css"
import "../../../index.css"
import {Link} from "react-router-dom";

export function RegistrationPage() {

    const [form, setForm] = useState({});
    const [error, setError] = useState("");
    let disableInput = false;


    function onSubmit(e) {
        e.preventDefault()

        if (disableInput)
            return;
        console.log(form)

        if(form.password !== form.confPassword)
            return setError("passwords do not match!")

        disableInput = true;
        Axios.post("/api/auth/register", {...form,confPassword:undefined})
            .then(({ data }) => {
                console.log(data)
                if (data.ok)
                    window.location = "/"

                else
                    setError(data.message)

                disableInput= false;

            })
            .catch(err => {
                console.log(err)
                disableInput= false
            })

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
                <TextField title={"confirm password"} inputType={"password"} name={"confirm-password"} placeHolder={"Confirm your password..."} value={form.confPassword} onInput={(val) =>
                    !disableInput && setForm({ ...form, confPassword: val })} />
            </InputFieldWrapper>


            <InputFieldWrapper>
                <TextField title={"first name"} inputType={"text"} name={"firstName"} placeHolder={"enter your first name..."} value={form.firstName} onInput={(val) =>
                    !disableInput && setForm({ ...form, firstName: val })} />
            </InputFieldWrapper>


            <InputFieldWrapper>
            <TextField title={"last name"} inputType={"text"} name={"LastName"} placeHolder={"enter your last name..."} value={form.lastName} onInput={(val) =>
                !disableInput && setForm({ ...form, lastName: val })} />
            </InputFieldWrapper>


            <InputFieldWrapper>
                <div className="radioButtons textField">
                    <p>gender</p>
                    <div className="buttonsOnly">
                        <input type="radio" id="male" name="gender" value="male" onChange={(e)=>{!disableInput && setForm({ ...form, gender: e.target.value })}}/>
                        <label htmlFor="male">Male</label>
                        <input type="radio" id="female" name="gender" value="female" onChange={(e)=>!disableInput && setForm({ ...form, gender: e.target.value })}/>
                        <label htmlFor="female">Female</label>
                        <input type="radio" id="other" name="gender" value="other" onChange={(e)=>!disableInput && setForm({ ...form, gender: e.target.value })}/>
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
            </InputFieldWrapper>


            <h2 className={"register_error"} >{error}</h2>
           <input type="submit" value={"Register"}
                className={"orangeBtn roundedCorners_lite register_button"} />

            <p>Already have an account? <Link to={"/login"}>Login</Link></p>
        </form>

    </div>
}

export default RegistrationPage
