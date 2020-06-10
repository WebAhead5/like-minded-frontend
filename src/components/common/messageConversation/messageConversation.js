import React, { useEffect, Fragment } from "react";
import "./MessagesPreviews.css";
const { useState } = React;


const data = [{ profile: { id: 2, userid: 2, firstname: 'Moris', lastname: 'Rafoul', gender: 'male', status: 'Single', bio: 'Teaching web-dev', job: 'Web-Developer', livingin: 'Haifa', primaryphoto: 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4', subphotos: ['https://avatars2.githubusercontent.com/u/51966598?s=60&v=4', 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4', 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4'] }, lastMessage: { id: 2, senderUserId: 1, recipUserId: 2, message: 'How\'s tricks?', timeAndDate: new Date('Fri May 01 2020 13:08:29 GMT+0300 (Israel Daylight Time)') } }]

const defaultImage = "/images/defaultImageProfile.png";

function MessagesPreviews({ }) {

    return (
        <Fragment>
            <p id="pending">pending (1)</p>

            <div className="messagePreviews">
                <div>
                    <img src={defaultImage}></img>
                </div>
                <div className="nameAndMessage">
                    <p id="candidateName">Paul Gascoigne</p>
                    <p id="messagePreview">Hey, how's it going?</p>
                </div>

                <div className="newAndTime">
                    <p id="new">New</p>
                    <p id="timeSince">5 minutes ago</p>
                </div>
            </div>
        </Fragment>
    );
}

export default MessagesPreviews;
