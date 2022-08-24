import React from 'react';
import HS from './HeaderStyle.module.css'
import {useDispatch} from "react-redux";
import {addIndexOf} from "../../../redux/reducers/UserReducer";

const Header = () => {

    const dispatch = useDispatch();

    return (
        <div className={HS.header}>
            <div className={HS.userBlock}>
            <img className={HS.user} src="https://www.meme-arsenal.com/memes/b7a6a9da6abd0d2add30da776e5c8242.jpg" alt="ava"/>
            </div>
            <div className={HS.castomInput}>
                <input className={HS.searchInput} type="text" placeholder="Search or start new chat" onChange={(event) => {dispatch(addIndexOf(event.currentTarget.value))} }/>
            </div>

        </div>
    );
};

export default Header;


