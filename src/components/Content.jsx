import React from "react";
import {Result} from "./Result.jsx";
import {Question} from "./question/Question.jsx";
import {useSelector} from "react-redux";
import {getAnswersList, getCurrentQuestionNumber, getTotalNumberQuestions} from "../redux/questionsSelector.js";
import {Preloader} from "./common/Preloader.jsx";

export const Content = ({isLoading}) => {
    const totalNumberQuestions = useSelector(state => getTotalNumberQuestions(state))
    const currentQuestionNumber = useSelector(state => getCurrentQuestionNumber(state))
    const answersList = useSelector(state => getAnswersList(state))
    if (isLoading) {
        return <Preloader/>
    }
    return (
        <div className="p-40 content">
            {totalNumberQuestions < currentQuestionNumber + 1
                ? <Result answersList={answersList}/>
                : <Question currentQuestionNumber={currentQuestionNumber}/>}
        </div>
    )
}