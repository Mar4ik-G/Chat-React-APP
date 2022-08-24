import {createSlice} from "@reduxjs/toolkit";

const MessagesReducer =createSlice({
    name:"MessagesReducer",
    initialState:{
            1:[
                {Me:false,text:'розуміння стеку технологій WEB/HTML/CSS',date:'4.08.2022, 10:48'},
                {Me:true,text:'Участь у івентах, корпоративах та тімбілдингах компанії.',date:'4.08.2022, 12:48'},
            ],
             2:[
                 {Me:false,text:'розуміння стеку технологій WEB/HTML/CSS',date:'Aug 11 ,2017 21:25'},
                 {Me:true,text:'Участь у івентах, корпоративах та тімбілдингах компанії.',date:'4.08.2022, 11:48'},
             ],
            3:[
                {Me:false,text:'розуміння стеку технологій WEB/HTML/CSS',date:'4.08.2022, 16:48'},
                {Me:true,text:'Участь у івентах, корпоративах та тімбілдингах компанії.',date:'6.08.2022, 13:48'},
            ],
            4:[
                {Me:false,text:'розуміння стеку технологій WEB/HTML/CSS',date:'4.08.2022, 17:40'},
                {Me:true,text:'Участь у івентах, корпоративах та тімбілдингах компанії.',date:'4.08.2022, 12:00'},
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