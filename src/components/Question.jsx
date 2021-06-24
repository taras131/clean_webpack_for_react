import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentQuestion} from "../redux/questionsSelector.js";
import {addAnswer, setCurrentQuestionNumber} from "../redux/questionsReducer.js";

export const Question = ({currentQuestionNumber}) => {
    const [choice, setChoice] = useState([])
    const dispatch = useDispatch()
    const currentQuestion = useSelector(state => getCurrentQuestion(state, currentQuestionNumber))
    const correctAnswerList = currentQuestion.correct_answer.split(", ")
    const responseOptions = currentQuestion.incorrect_answers.concat(correctAnswerList).sort()
    const chekAnswer = () => {
        let resultCheck = true
        correctAnswerList.forEach(item => {
            if (choice.indexOf(item) === -1) {
                resultCheck = false
            }
        })
        return resultCheck
    }
    const onAnswerClick = () => {
        if (choice.length >= 1) {
            const isCorrectAnswer = chekAnswer()
            dispatch(addAnswer({
                difficulty: currentQuestion.difficulty,
                question: currentQuestion.question,
                answer: choice,
                correctAnswer: currentQuestion.correct_answer,
                isCorrectAnswer: isCorrectAnswer
            }))
            dispatch(setCurrentQuestionNumber())
            setChoice([])
        }
    }
    const onInputChange = (e) => {
        setChoice(prev => {
            if (correctAnswerList.length > 1) {
                if (choice.indexOf(e.target.value) !== -1) {
                    return [...prev.filter(item => item !== e.target.value)]
                } else {
                    return [...prev, e.target.value]
                }
            } else {
                return [e.target.value]
            }
        })
    }
    const responseOptionsInputs = responseOptions.map((item, index) => {
        return <label key={`${index}_${item}`} className="d-flex align-center">
            <input
                className = "checkbox"
                type={correctAnswerList.length > 1 ? "checkbox" : "radio"}
                checked={choice.indexOf(item) === -1 ? false : true}
                name={item}
                value={item}
                onChange={onInputChange}/>
            <span className="checkboxStyle"></span>
            <span className="labelText">{item.replaceAll("&#039;", "")}</span>
        </label>

    })
    return (
        <div className="d-flex direction-column align-center">
            <div style={{width: '100%'}} className="d-flex justify-around align-center">
                <h1>Question №{currentQuestionNumber + 1}</h1>
                <h3 style={{marginLeft: 20}}>Difficulty: {currentQuestion.difficulty}</h3>
            </div>
            <h3>{currentQuestion.question.replaceAll("&quot;","").replaceAll("&shy","")}</h3>
            <form className="d-flex direction-column">
                {responseOptionsInputs}
            </form>

            <button onClick={onAnswerClick}>Answer</button>
        </div>
    )
}