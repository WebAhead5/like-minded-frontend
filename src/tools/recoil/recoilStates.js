import {atom, selector,atomFamily} from "recoil";
import * as keys from "./stateKeys"
import Axios from "axios";
import {LOGGED_IN} from "./stateKeys";



export const profileState = selector({
    key: keys.PROFILE_STATE,
    get: async ()=> {
        try {
            let {data:res} = await Axios.get("/api/auth/currentUser")
            if(res.ok)
                return res.data.profile
            return false
        } catch (e) {
            return false;
        }
    },

    set: async ({}, data)=> {
        try {
            let {data:res} = await Axios.post("/api/userProfile",data)
            console.log(res)
            return res.ok;

        } catch (e) {
            return false;
        }
    }
});




export const loggedInState = selector({
    key: keys.LOGGED_IN,
     get: async ()=> {
         try {
             let {data} = await Axios.get("/api/auth/currentUser")
             return data.ok;
         } catch (e) {
             return false;
         }
     }
});




export const settingsState = atom({
    key: keys.SETTINGS_STATE,
    default:  {},
});

export const quizzesState = atom({
    key: keys.QUIZZES_STATE,
    default:  {},
});