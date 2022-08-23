import React from 'react';
import './contentStyle.css'
import UserName from "../Header/UserName";
import Messages from "../Massages/Messages";
import SendMessage from "../SendMessage/SendMessage";


const Content = () => {
    return (
        <div className='content'>
            <UserName/>
            <Messages/>
            <SendMessage/>
        </div>
    );
};

export default Content;