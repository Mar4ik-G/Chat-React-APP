import {createSlice} from "@reduxjs/toolkit";

const MessagesReducer =createSlice({
    name:"MessagesReducer",
    initialState:{
            1:[
                {Me:false,text:'1111111111111111',date:'14.08.2022, 11:14'},
                {Me:true,text:'1111111111111.',date:'14.08.2022, 11:18'},
            ],
             2:[
                 {Me:false,text:'22222222222222222222222222',date:'14.08.2022, 11:14'},
                 {Me:true,text:'2222222222222222222',date:'14.08.2022, 11:17'},
             ],
            3:[
                {Me:false,text:'333333333333333333333',date:'14.08.2022, 11:14'},
                {Me:true,text:'333333333333333333333333',date:'14.08.2022, 11:15'},
            ],
            4:[
                {Me:false,text:'444444444444444444444444',date:'14.08.2022, 11:14'},
                {Me:true,text:'4444444444444444444444',date:'14.08.2022, 11:13'},
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