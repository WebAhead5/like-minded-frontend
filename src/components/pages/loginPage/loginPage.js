import React, {useEffect, useState} from "react";
import Axios from "axios";
import InputFieldWrapper from "../../common/inputFieldWrapper/inputFieldWrapper";
import TextField from "../../common/textField/textField";
import "./loginPage.css"
import "../../../index.css"
import {Link} from "react-router-dom";

export function LoginPage() {

    const [form, setForm] = useState({});
    const [error, setError] = useState("");

    let disableInput = false;

    function onSubmit(e) {
        e.preventDefault()


        if(disableInput)
            return;
        disableInput = true;


        Axios.post("/api/auth/login",form)
            .then(({data})=>{

                if(data.ok)
                    window.location ="/login/successful"

                else
                {
                    setError(data.message)
                    disableInput =false;
                }



            })
            .catch(err=>{
                console.log(err)
                disableInput = false;

            } )

    }

    return <div className={"register"}>

        <div className={"register_logoContainer"}>
            <img src={"/images/img-logo-512.png"} alt={"logo"} className={"register_logo"}/>
            <h1>like minds</h1>
            <h4>Helping to connect like-minded personalities</h4>
        </div>
        <form className={"register_inputFields"} onSubmit={onSubmit} >
            <InputFieldWrapper>
                <TextField title={"Email"} inputType={"Email"} name={"email"} placeHolder={"Enter your email..."} value={form.email} onInput={(val)=>
                   !disableInput && setForm({...form, email:val})
                }/>
            </InputFieldWrapper>
            <InputFieldWrapper>
                <TextField title={"password"} inputType={"password"} name={"password"} laceHolder={"Enter your password..."} value={form.password} onInput={(val)=>
                    !disableInput &&  setForm({...form, password:val})}/>
            </InputFieldWrapper>

            <h2 className={"register_error"} >{error}</h2>

            <input type="submit" value={"Login"} className={"blackBtn roundedCorners_lite register_button"}/>
            <Link to={"/register"}>
                <input type="button" value={"Register"}  className={"blackBtn roundedCorners_lite register_button"}/>
            </Link>
            <hr/>

            <a href={"/api/auth/google"}> <input type="button" value={"Sign in with Google"}
                   className={"orangeBtn roundedCorners_lite register_button"}/></a>

        </form>

    </div>


}
