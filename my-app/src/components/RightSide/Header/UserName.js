import React from 'react';
import HS from "./HeaderStyle.module.css";
import {useSelector} from "react-redux";

const UserName = () => {

    const id = useSelector(state => state.UserReducer.id)
    const infoUser = useSelector(state => state.UserReducer.users)


    return (
        <div className={HS.header}>

            {infoUser[`${id-1}`]?
                <>
                    <div className={HS.userBlock}>
                        <img className={HS.user} src={infoUser[`${id-1}`].img} alt="ava"/>
                    </div>
                        <h3 className={HS.nickName}>{infoUser[`${id-1}`].name}</h3>
                </>
                : null}

        </div>
    );
};

export default UserName;