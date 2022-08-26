import './App.css';
import Main from "./components/LeftSide/Main/Main";
import Content from "./components/RightSide/Content/Content";
import {useEffect} from "react";
import {setMessages} from "./redux/reducers/MessagesReducer";
import {useDispatch} from "react-redux";

function App() {

    const dispatch = useDispatch();

    useEffect(()=> {
        for (let i = 1; i <= 4 ; i++) {
            if (localStorage.key(i) !== undefined){
                dispatch(setMessages(i))
                 }
             }
        },[])

  return (
    <div className="App">
        <Main/>
        <Content/>
    </div>
  );
}

export default App;
