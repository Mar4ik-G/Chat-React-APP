import {createSlice} from "@reduxjs/toolkit";

const MessagesReducer =createSlice({
    name:"MessagesReducer",
    initialState:{
            1:[
                {Me:false,text:'Hello my name Alice',date:'25.08.2022, 17:31'},
                {Me:true,text:'Hi I a`m Mark.',date:'25.08.2022, 17:31'},
            ],
             2:[
                 {Me:false,text:'Hello my name Josefina',date:'25.08.2022,17:33'},
                 {Me:true,text:'Hi I a`m Mark',date:'25.08.2022, 17:33'},
             ],
            3:[
                {Me:true,text:'Hi I a`m Mark',date:'25.08.2022, 17:35'},
                {Me:false,text:'Hello my name Velazquez',date:'25.08.2022, 17:35'},
            ],
            4:[
                {Me:false,text:'Hello my name Barrera',date:'25.08.2022, 17:30'},
                {Me:true,text:'Hi I a`m Mark',date:'25.08.2022, 17:30'},
            ],
    },
    reducers:{
        addMessage(state,action){
            state[action.payload[1]].push(action.payload[0])
            // addInfo(state,'chat')
        },
        // changeMess(state,action){
        //     debugger
        //     state = action.payload.message;
        // }
    }

})

export const {addMessage,changeMess} = MessagesReducer.actions
export default MessagesReducer.reducer