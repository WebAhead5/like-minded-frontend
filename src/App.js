//react imports------------------------------------------------
import React, {useEffect} from 'react';
import {Route} from "react-router-dom";

//recoil imports-----------------------------------------------
import {useRecoilState} from 'recoil';
import * as states from "./tools/recoil/recoilAtoms";

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
import {isLoggedIn} from "./tools/data";



function App() {

    const  [profile,setProfile] = useRecoilState(states.profileState)
    const  [settings,setSettings] = useRecoilState(states.settingsState)
    const  [chats,setChats] = useRecoilState(states.chatsSettings)

    useEffect(()=>{

        //in page redirect
       const unlisten =  history.listen(()=>{
           //todo validate login and update login state
            //todo validate data with server
       })

        //on page load after refresh
        window.onload = (e) => {
            //todo load data from local storage
            //todo validate loaded data with server
            let count = localStorage.getItem("refreshCount");
            localStorage.setItem("refreshCount",(isNaN(count)?0:parseInt(count)+1 ).toString())
            console.log("hi")
        };

       //on page close before refresh
        window.onload = (e) => {
            //todo clear local storage if user is not logged in
            (async ()=>{
                let isLoggedIn = await isLoggedIn()
                if(isLoggedIn)
                {
                    const dataToStore = { profile, settings, chats }
                    localStorage.setItem("data", JSON.stringify(dataToStore))
                }
                else{

                }
            })()

            //todo store data in local storage


        };

        //cleanup
        return()=>{
            unlisten();
            window.onload =null

        }
    },[])


    return (
        <div>
            <IfLoggedIn>
                <NavBar/>
            </IfLoggedIn>
            {JSON.stringify(profile)}

            <Route exact path="/dashboard" render={()=>
                <IfLoggedIn elseCb={()=>history.push("/login")} ><DashboardPage/></IfLoggedIn>
            }/>

            <AuthRoutes/>
            <ProfileRoutes/>
            <MessageRoutes/>

        </div>
    );
}

export default App;
