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
import {
    getLoggedInUserData,
    getPendingLikes,
    isLoggedIn,
    setProfileData,
    setRelationship
} from "./tools/data";
import deepEquals from "deep-equal"


function App() {


    const [loading, setLoading] = useState(undefined)
    const [profile, setProfile] = useState(undefined)
    const [settings, setSettings] = useState(undefined)
    const [messages, setMessages] = useState(undefined)
    const [pendingLikes, setPendingLikes] = useState(undefined)

    function loadData(cb) {

        (async function () {

            setLoading(true)

            console.log("loading")
            let loggedIn = await isLoggedIn()
             loggedIn = await isLoggedIn()
            if (loggedIn) {
                let {profile: prof, settings: sett, chats} = await getLoggedInUserData()
                if(!deepEquals(prof,profile))
                    setProfile(prof)
                if(!deepEquals(sett,settings))
                    setSettings(sett)
                if(!deepEquals(chats,messages))
                    setMessages(chats)

                let pendingPeople = await getPendingLikes()
                if(!deepEquals(pendingLikes,pendingPeople))
                    setPendingLikes(pendingPeople)

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
        get pendingLikes(){
            return pendingLikes;
        },
        setProfile: (newVal)=>{
            if(!deepEquals(newVal,profile))
            {
                setProfile(newVal)
                setProfileData(newVal).then(ok=> !ok && loadData())
            }

        },
        setPendingLikes :(userId,newStatus)=>{

                setRelationship(userId,newStatus)
                    .then(()=> loadData())
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


            <Route exact path="/">
                <IfLoggedIn cb={() =>
                    loadData(() => history.push("/dashboard"))  }
                            elseCb={() => history.push("/login")}/>

            </Route>


            <Route exact path="/dashboard">
                <IfLoggedIn elseCb={()=>history.push("/login")} >
                    <DashboardPage data={dataObj}/>
                </IfLoggedIn>
            </Route>

            <AuthRoutes/>
            <ProfileRoutes data={dataObj} />
            <MessageRoutes data={dataObj}/>
        </div>
    );
}

export default App;
