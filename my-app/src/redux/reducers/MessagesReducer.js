import {createSlice} from "@reduxjs/toolkit";

const MessagesReducer =createSlice({
    name:"MessagesReducer",
    initialState:{
            1:[
                {Me:false,text:'о в свої ряди цілеспрямованих стажерів. Ми з перш'},
                {Me:true,text:'Участь у івентах'},
                {Me:false,text:'Участь у івентах, корпоративах та тімбілдингах компанії.'},
                {Me:true,text:'Участь у івентах, корпоративах та тімбілдингах компанії.'},
            ],
             2:[
                 {Me:false,text:'Про компанію читайте на нашій сторінці у Facebook або на DOU.ua'},
                 {Me:false,text:'das'},
                 {Me:true,text:'Участь у івентах'},
                 {Me:true,text:'Участь у івентах, корпоративах та тімбілдингах компанії.'},
                 {Me:true,text:'рівень англійської Intermediate+'}
             ],
            3:[
                {Me:false,text:'Участь у івентах'},
                {Me:true,text:'Участь у івентах, корпоративах та тімбілдингах компанії.'},
                {Me:true,text:'adsadasdads'}
            ],
            4:[
                {Me:false,text:'розуміння стеку технологій WEB/HTML/CSS'},
                {Me:false,text:'Участь у івентах'},
                {Me:true,text:'Участь у івентах, корпоративах та тімбілдингах компанії.'},
                {Me:true,text:'adsadasdads'},
                {Me:true,text:'часть у івентах, корпоративах та тімбілдингах компанії'},
                {Me:false,text:'Ми — компанія, яка спеціалізується на розробці на React/Angular технології приймемо в свої ряди цілеспрямованих стажерів. Ми з першого дня надаємо фінансову компенсацію щомісячно кожному учаснику навчання.'}
            ],
    },
    reducers:{
        addMessage(state,action){
            state[action.payload[1]].push(action.payload[0])
        }
    }

})

export const {addMessage} = MessagesReducer.actions
export default MessagesReducer.reducer