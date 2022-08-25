import {createSlice} from "@reduxjs/toolkit";

 const UserReducer =createSlice({
    name:"UserReducer",
    initialState:{
        id:null,
        indexof:'',
        usersWithoutDate: [
            {
                id:1,
                img:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
                name:'Alice Freeman',
            },
            {
                id:2,
                img:'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B',
                name:'Josefina',
            },
            {
                id:3,
                img:'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock--480x320.jpg',
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
                img:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
                name:'Alice Freeman',
                date:'Aug 25 2022 17:31:11',
            },
            {
                id:2,
                img:'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B',
                name:'Josefina',
                date:'Aug 25 2022 17:33:11',
            },
            {
                id:3,
                img:'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock--480x320.jpg',
                name:'Velazquez',
                date:'Aug 25 2022 17:35:11',
            },
            {
                id:4,
                img:'https://www.masslive.com/resizer/kNl3qvErgJ3B0Cu-WSBWFYc1B8Q=/arc-anglerfish-arc2-prod-advancelocal/public/W5HI6Y4DINDTNP76R6CLA5IWRU.jpeg',
                name:'Barrera',
                date:'Aug 25 2022 17:30:11',
            },
        ]
    },
     reducers:{
         addId(state,action){
             state.id =  action.payload
         },
         // addName(state,action){
         //     state.name =  action.payload
         // },
         // findIndex(state){
         //    state.searchIndex = state.users.indexOf(state.name)
         // },
         addIndexOf(state,action){
             state.indexof = action.payload
         },
         addDate(state,action){
             state.users[action.payload.id-1].date = (action.payload.date)
         },
         sortArr(state){
             state.users.sort(function(a,b){
                 return new Date(b.date) - new Date(a.date);
             });
         }
     }
})


export default UserReducer.reducer
export const {addId,addIndexOf,addDate,sortArr} = UserReducer.actions