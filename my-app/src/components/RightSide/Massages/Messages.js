import React, {useEffect} from 'react';
import MS from './MessageStyle.module.css'
import {useDispatch, useSelector} from "react-redux";
import {setMessages} from "../../../redux/reducers/MessagesReducer";

const Messages = () => {

    const id = useSelector(state => state.UserReducer.id)
    const infoUser = useSelector(state => state.UserReducer.usersWithoutDate)
    const Messages = useSelector(state => state.MessagesReducer)


    return (
        <div className={MS.content }>
            {id? Messages[`${id}`].map(e =>  e.Me?
                <div className={MS.blockForImgAndTextme} key={e.index}>
                    <div  className={MS.smsMe}>{e.text}<p className={MS.dateM}>{new Date(e.date).getHours() >= 12? e.date + " PM" : e.date + " AM" }</p></div>
                </div>
                    :<div  key={e.index}  className={MS.blockForImgAndText}>
                        <img className={MS.photo} src={infoUser[`${id-1}`].img} alt=""/>
                        <div className={MS.smsNotMe}>
                            {e.text}
                            <p className={MS.date}>{new Date(e.date).getHours() > 12? e.date + " PM" : e.date + " AM"}</p>
                        </div>
                </div>)
                : null}
        </div>
    );
};

export default Messages;