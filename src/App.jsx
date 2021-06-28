import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Header from "./components/Header.jsx";
import "./style/style.css"
import {Content} from "./components/Content.jsx";
import {getQuestions} from "./redux/questionsReducer.js";
import {getIsLoading} from "./redux/questionsSelector.js";
import {Message} from "./components/common/Message.jsx";

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getQuestions())
    },[])
    const isLoading = useSelector(state => getIsLoading(state))
    return(
        <div className="wrapper">
            <Header/>
            <Content isLoading = {isLoading}/>
            <Message/>
        </div>
    )
}

export default App