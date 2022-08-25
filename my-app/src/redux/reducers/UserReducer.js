import {createSlice} from "@reduxjs/toolkit";

 const UserReducer =createSlice({
    name:"UserReducer",
    initialState:{
        id:null,
        indexof:'',
        usersWithoutDate: [
            {
                id:1,
                img:'https://cdn.maximonline.ru/28/f8/71/28f871cd2aefb92c8c41e108797cde7b/728x728_1_9be45a93039fc399f9055684f9d08baa@1024x1024_0xac120002_10429326581550233820.jpg',
                name:'Alice Freeman',
            },
            {
                id:2,
                img:'https://www.komarov.design/content/images/2020/11/image-4.jpeg',
                name:'Josefina',
            },
            {
                id:3,
                img:'https://rugraphics.ru/wp-content/uploads/licza-lyudej.png',
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
                img:'https://cdn.maximonline.ru/28/f8/71/28f871cd2aefb92c8c41e108797cde7b/728x728_1_9be45a93039fc399f9055684f9d08baa@1024x1024_0xac120002_10429326581550233820.jpg',
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
                img:'https://rugraphics.ru/wp-content/uploads/licza-lyudej.png',
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
                 return (b.date) - (a.date);
             });
         }
     }
})


export default UserReducer.reducer
export const {addId,addIndexOf,addDate,sortArr} = UserReducer.actions