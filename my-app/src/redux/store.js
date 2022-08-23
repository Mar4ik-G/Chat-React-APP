import { combineReducers, configureStore} from "@reduxjs/toolkit";
import UserReducer from "./reducers/UserReducer";
import MessagesReducer from "./reducers/MessagesReducer";




const rootReducer = combineReducers({
    UserReducer:UserReducer,
    MessagesReducer:MessagesReducer,
})

export const store = configureStore({
    reducer:rootReducer,
    })