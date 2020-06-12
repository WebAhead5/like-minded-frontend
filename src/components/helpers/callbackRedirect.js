import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {history} from "../../tools/history";

CallbackRedirect.propTypes = {
    redirectionLink: PropTypes.string.isRequired ,
    cb: PropTypes.func.isRequired
};

function CallbackRedirect({redirectionLink, cb}) {

    useEffect(()=>{
        if(cb)
            ( async ()=> {
            await cb()
            history.push(redirectionLink)
            })()

    },[])

    return (<Fragment/>);
}

export default CallbackRedirect;