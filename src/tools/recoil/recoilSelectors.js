import {selector} from "recoil";
import * as keys from "./stateKeys"
import Axios from "axios";


// export const profileState = selector({
//     key: keys.PROFILE_STATE,
//     get: async () => {
//         try {
//             let {data: res} = await Axios.get("/api/auth/currentUser")
//
//             if (res.ok)
//                 return res.data.profile
//             return false
//         } catch (e) {
//             console.log(e)
//
//             return false;
//         }
//     },
//
//     set: async ({}, data) => {
//         try {
//             let {data: res} = await Axios.post("/api/userProfile", data)
//             console.log(res)
//             return res.ok;
//
//         } catch (e) {
//             return false;
//         }
//     }
// });
//
// export const loggedInState = selector({
//     key: keys.LOGGED_IN,
//     get: async () => {
//         try {
//             let {data} = await Axios.get("/api/auth/currentUser")
//             return data.ok;
//         } catch (e) {
//             return false;
//         }
//     }
// });
//



export const localsStorageState = selector({
    key: keys.LOCAL_STORAGE_KEY,
    get: ({set}) => {

    },

    set: ({},data)=>{

    }
});