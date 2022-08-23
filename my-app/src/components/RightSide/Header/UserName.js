import React from 'react';
import HS from "./HeaderStyle.module.css";

const UserName = () => {
    return (
        <div className={HS.header}>
            <div className={HS.userBlock}>
                <img className={HS.user} src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock--480x320.jpg" alt="ava"/>
            </div>
            <h3 className={HS.nickName}>Josepfina</h3>
        </div>
    );
};

export default UserName;