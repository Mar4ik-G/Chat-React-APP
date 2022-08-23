import React from 'react';
import HS from './HeaderStyle.module.css'

const Header = () => {
    return (
        <div className={HS.header}>
            <div className={HS.userBlock}>
            <img className={HS.user} src="https://www.meme-arsenal.com/memes/b7a6a9da6abd0d2add30da776e5c8242.jpg" alt="ava"/>
            </div>
            <div className={HS.castomInput}>
                <input className={HS.searchInput} type="text" placeholder="Search or start new chat"/>
            </div>

        </div>
    );
};

export default Header;


