import {createSlice} from "@reduxjs/toolkit";

 const UserReducer =createSlice({
    name:"UserReducer",
    initialState:{
        id:null,
        indexof:'',
        usersWithoutDate: [
            {
                id:1,
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRR9TH0Yr1jksLxAOP5I5sd-Qr0wc0xxLLwOXPPy4wUFhlHdCkbVuXU2fcvQfCnRcoiSA&usqp=CAU',
                name:'Alice Freeman',
            },
            {
                id:2,
                img:'https://www.komarov.design/content/images/2020/11/image-4.jpeg',
                name:'Josefina',
            },
            {
                id:3,
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqf5WTMP0g-LMgTsQxdHyvI8LNrbKCXLpoC-E8pGyjCFWM2P8hkqYkKL0Qh2rvux22QAY&usqp=CAU',
                name:'Velazquez',
            },
            {
                id:4,
                img:'https://www.masslive.com/resizer/kNl3qvErgJ3B0Cu-WSBWFYc1B8Q=/arc-anglerfish-arc2-prod-advancelocal/public/W5HI6Y4DINDTNP76R6CLA5IWRU.jpeg',
                name:'Barrera',
            },
        ],
        users: [
            {
                id:1,
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRR9TH0Yr1jksLxAOP5I5sd-Qr0wc0xxLLwOXPPy4wUFhlHdCkbVuXU2fcvQfCnRcoiSA&usqp=CAU',
                name:'Alice Freeman',
                date:1661450220764,
            },
            {
                id:2,
                img:'https://www.komarov.design/content/images/2020/11/image-4.jpeg',
                name:'Josefina',
                date:1661450220764,
            },
            {
                id:3,
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqf5WTMP0g-LMgTsQxdHyvI8LNrbKCXLpoC-E8pGyjCFWM2P8hkqYkKL0Qh2rvux22QAY&usqp=CAU',
                name:'Velazquez',
                date:1661450220764,
            },
            {
                id:4,
                img:'https://www.masslive.com/resizer/kNl3qvErgJ3B0Cu-WSBWFYc1B8Q=/arc-anglerfish-arc2-prod-advancelocal/public/W5HI6Y4DINDTNP76R6CLA5IWRU.jpeg',
                name:'Barrera',
                date:1661450220764,
            },
        ]
    },
     reducers:{
         addId(state,action){
             state.id =  action.payload
         },
         addUsers(state,action){
             state.users = action.payload
         },
         addIndexOf(state,action){
             state.indexof = action.payload
         },
         addDate(state,action){
             state.users[action.payload.id-1].date = (action.payload.date)
         },
         sortArr(state){
             state.users.sort(function(a,b){
                 return b.date - a.date;
             });
         }
     }
})

export default UserReducer.reducer
export const {addId,addIndexOf,addDate,sortArr,addUsers} = UserReducer.actions