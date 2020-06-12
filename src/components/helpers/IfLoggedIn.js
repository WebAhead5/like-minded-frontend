import React, {Fragment, useEffect,useState } from 'react';
import {isLoggedIn} from "../../tools/data";


function IfLoggedIn({children , cb ,elseCb,not}) {

    const [loaded, setLoaded] = useState(false);


    useEffect(()=> {
            let canceled = false;
            (async () => {
                let res = await isLoggedIn()

                if(canceled)
                    return ;

                if (not)
                    res = !res;

                if (res)
                    cb && cb()

                else
                    elseCb && elseCb()

                setLoaded && setLoaded(res)
            })()
            return () => canceled = true
        }
        ,[])


    return (<Fragment>{loaded?children:null}</Fragment>);

}


export default IfLoggedIn;