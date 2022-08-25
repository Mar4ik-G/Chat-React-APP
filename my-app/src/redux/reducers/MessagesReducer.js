import {createSlice} from "@reduxjs/toolkit";

const MessagesReducer =createSlice({
    name:"MessagesReducer",
    initialState:{
            1:[
                {Me:false,text:'1111111111111111',date:'25.08.2022, 17:31'},
                {Me:true,text:'1111111111111.',date:'25.08.2022, 17:31'},
            ],
             2:[
                 {Me:false,text:'22222222222222222222222222',date:'25.08.2022,17:33'},
                 {Me:true,text:'2222222222222222222',date:'25.08.2022, 17:33'},
             ],
            3:[
                {Me:false,text:'333333333333333333333',date:'25.08.2022, 17:35'},
                {Me:true,text:'333333333333333333333333',date:'25.08.2022, 17:35'},
            ],
            4:[
                {Me:false,text:'444444444444444444444444',date:'25.08.2022, 17:30'},
                {Me:true,text:'4444444444444444444444',date:'25.08.2022, 17:30'},
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