import React from 'react';
import SMStyle from "./SendMessage.module.css"

const SendMessage = () => {
    return (
        <div className={SMStyle.sendMessage}>
            <div className={SMStyle.castomInput}>
                <input className={SMStyle.searchInput} type="text" placeholder="Type your message" />
            </div>
        </div>
    );
};

export default SendMessage;