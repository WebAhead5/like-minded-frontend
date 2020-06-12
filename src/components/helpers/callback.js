import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';

Callback.propTypes = {
    cb: PropTypes.func.isRequired
};

function Callback({cb}) {

    useEffect(()=>{
        cb && ( async ()=> await cb())()
    },[])

    return (<Fragment/>);
}

export default Callback;