import React, {Fragment, useEffect,useState} from 'react';
import {isLoggedIn} from "../../tools/data";
import IfLoggedIn from "./IfLoggedIn";



function IfLoggedOut({children,cb, elseCb,not = false}) {

    return <IfLoggedIn not={!not} cb={cb} elseCb={elseCb}> {children} </IfLoggedIn>;
}

export default IfLoggedOut;