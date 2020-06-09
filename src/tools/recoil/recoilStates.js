import {atom, selector} from "recoil";
import * as keys from "./stateKeys"
import Axios from "axios";

export const profileState = atom({
    key: keys.PROFILE_STATE,
    default: {},

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
    default: {},
});

export const quizzesState = atom({
    key: keys.QUIZZES_STATE,
    default: {},
});