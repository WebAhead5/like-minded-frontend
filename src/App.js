//react imports------------------------------------------------
import React, {useEffect, useState} from 'react';
import {Route} from "react-router-dom";


//pages imports------------------------------------------------
import AuthRoutes from "./components/routes/authRoutes";
import ProfileRoutes from "./components/routes/profileRoutes";
import MessageRoutes from "./components/routes/messageRoutes";
import DashboardPage from "./components/pages/dashboardPage/dashboardPage";

//helper components import-------------------------------------
import NavBar from "./components/common/navBar/navBar";
import IfLoggedIn from "./components/helpers/IfLoggedIn";

//module imports-----------------------------------------------
import {history} from "./tools/history";
import {getLoggedInUserData, getProfileData, isLoggedIn, setProfileData} from "./tools/data";
import Settings from "./components/pages/settings/settings";



function App() {


    const [loading, setLoading] = useState(undefined)
    const [profile, setProfile] = useState(undefined)
    const [settings, setSettings] = useState(undefined)
    const [messages, setMessages] = useState(undefined)

    function loadData(cb) {

        (async function () {

            setLoading(true)

            console.log("loading")
            let loggedIn = await isLoggedIn()
             loggedIn = await isLoggedIn()
            if (loggedIn) {
                let {profile: prof, settings: sett, chats} = await getLoggedInUserData()
                setSettings(sett)
                setProfile(prof)
                setMessages(chats)
            }

            else resetData()

            cb && cb();

            setLoading(false)


        })()

    }
    function resetData(){
        setSettings(undefined)
        setProfile(undefined)
        setMessages(undefined)
    }

    useEffect(() => {loadData();}, [])

    let dataObj = {
        get profile() {
         return profile;
        },
        get messages(){
            return messages
        },
        get chats(){
            return messages
        },
        get settings(){
            return settings
        },
        setProfile: (newVal)=>{
            newVal={...profile,...newVal}
            setProfile(newVal)
            setProfileData(newVal).then(ok=>{
                if(!ok)
                    getProfileData().then(data=> setProfile(data))
            })
        },
        setSettings,
        setMessages,
        setChats: setMessages
    }


    if (loading)
        return <div>loading....</div>


    return (
        <div>
            <IfLoggedIn>
                <NavBar/>
            </IfLoggedIn>

            {/*{JSON.stringify(messages)}*/}

            <Route exact path="/">
                <IfLoggedIn cb={() =>
                    loadData(() => history.push("/dashboard"))  }
                            elseCb={() => history.push("/login")}/>

            </Route>


            <Route exact path="/dashboard">
                <IfLoggedIn elseCb={()=>history.push("/login")} ><DashboardPage/> </IfLoggedIn>
            </Route>

            <AuthRoutes/>
            <ProfileRoutes data={dataObj} />
            <MessageRoutes data={dataObj}/>
        </div>
    );
}

export default App;
