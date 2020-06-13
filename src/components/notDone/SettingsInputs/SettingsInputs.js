import React, { Fragment } from "react";
import InputFieldWrapper from "../../common/wrappers/inputFieldWrapper/inputFieldWrapper";
import "./SettingsInputs.css";
const { useState } = React;



const defaultImage = "/images/defaultImageProfile.png";

function SettingsInputs({ }) {

    return (
        <Fragment>
            <br></br><br></br>
            <div id="settingsContainer">
                <InputFieldWrapper>
                    <div className="radioButtons textField settingsInput">
                        <p>gender</p>
                        <div className="buttonsOnly">
                            <input type="radio" id="male" name="gender"></input>
                            <label className="genderLabel" for="male">Male</label>
                            <input type="radio" id="female" name="gender"></input>
                            <label className="genderLabel" for="female">Female</label>
                            <input type="radio" id="other" name="gender"></input>
                            <label className="genderLabel" for="other">Other</label>
                        </div>
                    </div>
                </InputFieldWrapper>
                <InputFieldWrapper>
                    <div className="slidecontainer textField settingsInput">
                        <label for="maxDistance">Maximum Distance</label>
                        <p className="currentValue">11km</p>
                        <input type="range" min="1" max="100" value="40" className="slider" id="maxDistance"></input>
                    </div>
                </InputFieldWrapper>
                <InputFieldWrapper>
                    <div className="slidecontainer textField settingsInput">
                        <label for="ageRange">Age Range</label>
                        <p className="currentValue">21-30</p>
                        <input type="range" min="1" max="100" value="50" className="slider" id="ageRange"></input>
                    </div>
                </InputFieldWrapper>
                <InputFieldWrapper>
                    <div className="radioButtons textField settingsInput">
                        <p>show your age</p>
                        <div className="buttonsOnly">
                            <input type="radio" id="yes" name="agePrivacy"></input>
                            <label className="agePrivacy" for="yes">Yes</label>
                            <input type="radio" id="no" name="agePrivacy"></input>
                            <label className="agePrivacy" for="no">No</label>
                        </div>
                    </div>
                </InputFieldWrapper>
            </div>
        </Fragment>
    );
}

export default SettingsInputs;
