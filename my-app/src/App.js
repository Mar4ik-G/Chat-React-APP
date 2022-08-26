import './App.css';
import Main from "./components/LeftSide/Main/Main";
import Content from "./components/RightSide/Content/Content";
import {useEffect} from "react";
import {setMessages} from "./redux/reducers/MessagesReducer";
import {useDispatch} from "react-redux";
import {addUsers, sortArr} from "./redux/reducers/UserReducer";

function App() {

    const dispatch = useDispatch();

    useEffect(()=> {
        for (let i = 1; i <= 4 ; i++) {
            if (localStorage.getItem(i) !== null){
                dispatch(setMessages(i))
                 }
             }
        if (localStorage.getItem('users') !== null){
            dispatch(addUsers(JSON.parse(localStorage.getItem('users'))))
        }
        dispatch(sortArr())
    },[])

  return (
    <div className="App">
        <Main/>
        <Content/>
    </div>
  );
}

export default App;
