import Axios from "axios";

export async function getLoggedInUserData() {
    try {
        let {data: {ok, data}} = await Axios.get("/api/auth/currentUser")
        if (!ok)
            console.error("something went wrong on our end")
        return data;

    } catch (e) {
        console.error("something went wrong on our end")
    }
    return false;
}


export async function getProfileData(){

    try {
        let {data} = await Axios.get("/api/auth/currentUser")
        if(data.ok)
            return data.data.profile;
    } catch (e) {
        console.error("something went wrong on our end")
    }
    return false;

}
export async function setProfileData(data) {

    try {
        data.userId = undefined
        data.userid = undefined
        console.log(data)
        let {data: res} = await Axios.post("/api/userProfile", data)
        console.log(res)

        return (res.ok)

    } catch (e) {
        console.error("something went wrong on our end")
        return false;
    }
}
export async function getChats() {

    try {

        let {data: res} = await Axios.get("/api/chats")
        console.log(res)
        if(res.ok)
            return res.data;

    } catch (e) {
        console.error("something went wrong on our end")
    }

    return [];

}




export async function isLoggedIn() {
    try {

        let {data: res} = await Axios.get("/api/auth/isLoggedIn")
        if(!res.ok)
            console.error("something went wrong on our end")
        return res.ok && res.data;

    } catch (e) {
        console.error("something went wrong on our end")
        return false;
    }
}
export async function logout() {

    try {
        let res = await Axios.get("/api/auth/logout")
        return res.ok;
    } catch (e) {
        return false
    }

}
export async function logIn(form) {

    try {
        let {data} = await Axios.post("/api/auth/login",form)
        return data;
    } catch (e) {
        return {ok:false, message: "something went wrong on our end"}
    }

}