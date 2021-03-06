import React, {useState} from "react";
import InputFieldWrapper from "../../common/wrappers/inputFieldWrapper/inputFieldWrapper";
import TextField from "../../common/fields/textField/textField";
import "./loginPage.css"
import "../../../index.css"
import {Link} from "react-router-dom";
import {logIn} from "../../../tools/data";
import {history} from "../../../tools/history";

export function LoginPage() {

    const [form, setForm] = useState({});
    const [error, setError] = useState("");

    let disableInput = false;

    function onSubmit(e) {
        e.preventDefault()

        if (disableInput)
            return;
        disableInput = true;

        logIn(form).then((data) => {
            if (data.ok)
                history.push("/")
            else
                setError(data.message)

            disableInput = false;
        })


    }

    return <div className={"register"}>

        <div className={"register_logoContainer"}>
            <img src={"/images/img-logo-512.png"} alt={"logo"} className={"register_logo"}/>
            <h1>like minds</h1>
            <h4>Helping to connect like-minded personalities</h4>
        </div>
        <form className={"register_inputFields"} onSubmit={onSubmit}>
            <InputFieldWrapper>
                <TextField title={"Email"} inputType={"Email"} name={"email"} placeHolder={"Enter your email..."}
                           value={form.email} onInput={(val) =>
                    !disableInput && setForm({...form, email: val})
                }/>
            </InputFieldWrapper>
            <InputFieldWrapper>
                <TextField title={"password"} inputType={"password"} name={"password"}
                           laceHolder={"Enter your password..."} value={form.password} onInput={(val) =>
                    !disableInput && setForm({...form, password: val})}/>
            </InputFieldWrapper>

            <h2 className={"register_error"}>{error}</h2>

            <input type="submit" value={"Login"} className={"blackBtn roundedCorners_lite register_button"}/>
            <Link to={"/register"}>
                <input type="button" value={"Register"} className={"blackBtn roundedCorners_lite register_button"}/>
            </Link>
            <hr/>

            <input type="button"
                   onClick={()=>history.push("/api/auth/google")}
                   value={"Sign in with Google"}
                   className={"orangeBtn roundedCorners_lite register_button"}
            />


        </form>

    </div>


}
