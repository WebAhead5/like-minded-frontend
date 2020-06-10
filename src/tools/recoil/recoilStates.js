import {atom, selector,atomFamily} from "recoil";
import * as keys from "./stateKeys"
import Axios from "axios";
import {createBrowserHistory } from "react-router-dom"


export const historyObj= createBrowserHistory()


export const profileState = selector({
    key: keys.PROFILE_STATE_KEY,
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

export const routeState = atom({
    key: keys.ROUTE_STATE_KEY,
    default: "/login"
});
export const currentRouteState = atom({
    key: keys.ROUTE_STATE_KEY,
    set : ({get,set},newRoute)=>{
        set(routeState,newRoute)
    },
    get:(cb)=>{

        return  history.location
    },

});


export const loggedInState = selector({
    key: keys.LOGGED_IN_KEY,
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
    key: keys.SETTINGS_STATE_KEY,
    default:  {},
});

export const quizzesState = atom({
    key: keys.QUIZZES_STATE_KEY,
    default:  {},
});