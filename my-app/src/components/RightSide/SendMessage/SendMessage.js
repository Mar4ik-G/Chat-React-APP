import React, {useState} from 'react';
import SMStyle from "./SendMessage.module.css"
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "../../../redux/reducers/MessagesReducer";
import axios from "axios";

const SendMessage = () => {



    const id = useSelector(state => state.UserReducer.id)

    const dispatch = useDispatch();
    const [value,setValue] = useState('');


    const handlerValue = (event) => {
      setValue(event.currentTarget.value)
    }

    const handlerEnter = (event) => {
        if (event.which == 13 || event.keyCode == 13) {
            dispatch(addMessage([{Me:true,text:value},id]))
            setValue('');
            event.currentTarget.value = '';
            axios.get('https://api.chucknorris.io/jokes/random')
                .then(response => {
                    console.log(response)
                    setTimeout(() => {
                        dispatch(addMessage([{Me:false,text:response.data.value},id]))
                    },10000)
                   
                })

        }
    }

    return (
        <div className={SMStyle.sendMessage}>
            <div className={SMStyle.castomInput}>
                <input
                    className={SMStyle.searchInput}
                    type="text"
                    placeholder="Type your message"
                    onKeyDown={handlerEnter}
                    onChange={handlerValue}
                />
            </div>
        </div>
    );
};

export default SendMessage;