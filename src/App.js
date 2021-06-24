import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Header from "./components/Header.jsx";
import "./style/style.css"
import {Content} from "./components/Content.jsx";
import {getQuestions} from "./redux/questionsReducer.js";
import {getIsLoading} from "./redux/questionsSelector.js";
import Icon from './image/logo.png';

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        console.log("useEffect")
        dispatch(getQuestions())
    },[])
    const isLoading = useSelector(state => getIsLoading(state))
    return(
        <div className="wrapper ">
            <Header/>
            <Content/>
        </div>
    )
}

export default App