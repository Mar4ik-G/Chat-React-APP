import React from 'react';
import MS from './MessageStyle.module.css'
import {useSelector} from "react-redux";

const Messages = () => {

    const id = useSelector(state => state.UserReducer.id)
    const infoUser = useSelector(state => state.UserReducer.users)
    const Messages = useSelector(state => state.MessagesReducer)

    console.log(infoUser[`${id}`].img)

    return (
        <div className={MS.content}>
            {id? Messages[`${id}`].map(e =>  e.Me?
                <div className={MS.smsMe}>{e.text}</div> :

                <div className={MS.blockForImgAndText}>
                    <img className={MS.photo} src={infoUser[`${id}`].img} alt=""/>
                    <div className={MS.smsNotMe}>
                        {e.text}
                    </div>)
                </div>)

                : null}
        </div>
    );
};

export default Messages;