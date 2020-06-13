import React from 'react';
import IfLoggedIn from "./IfLoggedIn";



function IfLoggedOut({children,cb, elseCb,not = false}) {

    return <IfLoggedIn not={!not} cb={cb} elseCb={elseCb}> {children} </IfLoggedIn>;
}

export default IfLoggedOut;