import Axios from "axios";


export async function getProfileData(){

    try {
        let {data} = await Axios.get("/api/auth/currentUser")
        if(data.ok)
        return data.data.profile;
        return false
    } catch (e) {
        return false;
    }
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
        return false;
    }
}