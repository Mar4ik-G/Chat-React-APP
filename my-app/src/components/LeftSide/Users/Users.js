import React from 'react';
import US from './UsersStyle.module.css'
import {useDispatch, useSelector} from "react-redux";
import {addId} from "../../../redux/reducers/UserReducer";


const Users = () => {

    const Users = useSelector(state => state.UserReducer.users)
    const dispatch = useDispatch();
    const Messages = useSelector(state => state.MessagesReducer)

    return (
        <div className={US.contacts}>
            <h2 className={US.title}>Chats</h2>

            <div className={US.scrollBlock}>

                {Users.map(e =>
                    <div className={US.usersList} key={e.id} onClick={() => dispatch(addId(e.id))}>
                        <div className={US.person}>
                            <img className={US.photo} src={e.img} alt="user" />
                            <div>
                                <h4>{e.name}</h4>
                                <p className={US.lastMessage}>{Messages[`${e.id}`].slice(-1)[0].text}</p>
                            </div>

                        </div>
                        <p className={US.data}>{e.date}</p>
                    </div>)}

            </div>

        </div>
    );
};

export default Users;