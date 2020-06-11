import "./messagesPage.css"
import React, { useEffect} from "react";
import ConversationEntry from "../../common/conversationEntry/conversationEntry";
import {getChats, getProfileData, setProfileData} from "../../../tools/data";


// import "./";
const { useState } = React;
const data = [
    { profile: { id: 2, userid: 2, firstname: 'Moris', lastname: 'Rafoul', gender: 'male', status: 'Single', bio: 'Teaching web-dev', job: 'Web-Developer', livingin: 'Haifa', primaryphoto: 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4', subphotos: ['https://avatars2.githubusercontent.com/u/51966598?s=60&v=4', 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4', 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4'] }, lastMessageData: { id: 2, senderUserId: 1, recipUserId: 2, message: 'How\'s tricks?', timeAndDate: new Date('Fri May 01 2020 13:08:29 GMT+0300 (Israel Daylight Time)') } },
    { profile: { id: 2, userid: 2, firstname: 'Moris', lastname: 'Rafoul', gender: 'male', status: 'Single', bio: 'Teaching web-dev', job: 'Web-Developer', livingin: 'Haifa', primaryphoto: 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4', subphotos: ['https://avatars2.githubusercontent.com/u/51966598?s=60&v=4', 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4', 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4'] }, lastMessageData: { id: 2, senderUserId: 1, recipUserId: 2, message: 'How\'s tricks?', timeAndDate: new Date('Fri May 01 2020 13:08:29 GMT+0300 (Israel Daylight Time)') } },
    { profile: { id: 2, userid: 2, firstname: 'Moris', lastname: 'Rafoul', gender: 'male', status: 'Single', bio: 'Teaching web-dev', job: 'Web-Developer', livingin: 'Haifa', primaryphoto: 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4', subphotos: ['https://avatars2.githubusercontent.com/u/51966598?s=60&v=4', 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4', 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4'] }, lastMessageData: { id: 2, senderUserId: 1, recipUserId: 2, message: 'How\'s tricks?', timeAndDate: new Date('Fri May 01 2020 13:08:29 GMT+0300 (Israel Daylight Time)') } }

    ]

function MessagesPage( ) {


    const [chats,setChats] = useState([])
    useEffect(()=> {
        getChats().then(res => {
            if(!setChats)
                return;
            if(res)
                setChats(res)
            else
                window.location = "/login"
        })

    },[])



    // function updateValue(obj) {
    //
    //     let newProf = {...profile, ...obj}
    //     setProfile(newProf)
    //     setProfileData(newProf).then(ok => {
    //         if (!ok) getProfileData().then(data => {
    //             if (!setProfile)
    //                 return;
    //             else setProfile(data)
    //         })
    //     })
    // }
    //
    //



    return (
        <div className="messagesPage">

            <div >
                <p className="messagesPage_pending">pending (1)</p>
            </div>


                    <div className={"messagesPage_entries"}>
                        {chats.map((entry,index)=>
                        <div className={"messagesPage_entry"} key={index} >
                            <ConversationEntry  profile={ entry.profile } lastMessage={entry.lastMessageData}/>
                        </div>
                            )}
                    </div>

        </div>

    );
}

export default MessagesPage;