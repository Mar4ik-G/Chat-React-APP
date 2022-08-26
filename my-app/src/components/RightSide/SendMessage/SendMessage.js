import React, {useState} from 'react';
import SMStyle from "./SendMessage.module.css"
import {useDispatch, useSelector} from "react-redux";
import {addMessage, setLocalStorage} from "../../../redux/reducers/MessagesReducer";
import axios from "axios";
import {addDate, sortArr} from "../../../redux/reducers/UserReducer";

const SendMessage = () => {

    const id = useSelector(state => state.UserReducer.id)
    const Messages = useSelector(state => state.MessagesReducer)
    const dispatch = useDispatch();
    const [value,setValue] = useState('');


    const handlerValue = (event) => {
      setValue(event.currentTarget.value)
    }

    const sendFunction = (Me,response) =>{
        let time = new Date().toLocaleString('ua-Ua').slice(0,17);

        if(Me === true){
            dispatch(addMessage([{Me:true,text:value,date:time},id]))
        }else{
            dispatch(addMessage([{Me:false,text:response.data.value,date:time},id]))
        }

        dispatch(addDate({id,date:new Date().getTime()}))
        dispatch(sortArr())
        dispatch(setLocalStorage({id}))
    }

    const handlerEnter = (event) => {
        if (event.which === 13 || event.keyCode === 13) {
          sendFunction(true,null)
            setValue('');
            event.currentTarget.value = '';
            axios.get('https://api.chucknorris.io/jokes/random')
                .then(response => {
                    setTimeout(() => {
                      sendFunction(false,response)
                    },10000)
                })
            dispatch(sortArr())
        }
    }

    return (
        <div className={SMStyle.sendMessage}>
            <div className={SMStyle.customInput}>
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