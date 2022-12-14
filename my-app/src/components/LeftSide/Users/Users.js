import React, {useEffect} from 'react';
import US from './UsersStyle.module.css'
import {useDispatch, useSelector} from "react-redux";
import { addId, sortArr,} from "../../../redux/reducers/UserReducer";

const Users = () => {

    const dispatch = useDispatch();
    const indexof = useSelector(state => state.UserReducer.indexof)
    const Users = useSelector(state => state.UserReducer.users)
    const Messages = useSelector(state => state.MessagesReducer)

    useEffect(()=>{
        dispatch(sortArr())
    },[])

    let users = Users.filter(function(item,index,arr){
        return item.name.indexOf(`${indexof}`) !== -1
    })

    return (
        <div className={US.contacts}  >
            <h2 className={US.title}>Chats</h2>
            <div className={US.scrollBlock}>
                {users.map(e =>
                    <div className={US.usersList} key={e.id} onClick={() => {
                        dispatch(addId(e.id))
                    }}>
                        <div className={US.person}>
                            <img className={US.photo} src={e.img} alt="user" />
                            <div>
                                <h4  className={US.name}>{e.name}</h4>
                                <p className={US.lastMessage}>{Messages[`${e.id}`]? Messages[`${e.id}`].slice(-1)[0].text:null}</p>
                            </div>

                        </div>
                        <p className={US.data}>{Messages[`${e.id}`]? Messages[`${e.id}`].slice(-1)[0].date.slice(0,10) : null}</p>
                    </div>)}

            </div>

        </div>
    );
};

export default Users;