import React, {useEffect} from 'react';
import {useRecoilState} from "recoil";
import * as states from "../tools/recoil/recoilStates";
import {Redirect} from "react-router-dom";

function TestComponent(props) {
    const [profile, setProfile] = useRecoilState(states.profileState)


    return (
        <div>
            <button onClick={()=>{
                setProfile({
                    lastName:(profile.lastName===undefined?0:profile.lastName+1)
                })
            }}>test</button>

        </div>
    );
}


export default TestComponent;