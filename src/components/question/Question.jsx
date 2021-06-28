import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentQuestion} from "../../redux/questionsSelector.js";
import {addAnswer, setCurrentQuestionNumber} from "../../redux/questionsReducer.js";
import rightArrow from "../../images/right-arrow.png"
import {ResponseOptions} from "./ResponseOptions.jsx";
import {resetMessageInfo, setMessageInfo} from "../../redux/messageReducer";

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
            if(isCorrectAnswer) {
                dispatch(resetMessageInfo())
                dispatch(setMessageInfo("This is the correct answer", true))
            } else {
                dispatch(resetMessageInfo())
                dispatch(setMessageInfo("This is the wrong answer"))
            }
        } else {
            dispatch(setMessageInfo("You didn't choose an answer"))
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
        return <ResponseOptions key={`${index}_${item}`}
                                item={item}
                                correctAnswerList={correctAnswerList}
                                choice={choice}
                                onInputChange = {onInputChange} />
            })
    return (
        <div className="questions d-flex direction-column align-center p-40">
            <div style={{width: '100%'}} className="d-flex justify-around align-center">
                <h1>Question № <b>{currentQuestionNumber + 1}</b></h1>
                <h2 style={{marginLeft: 20}}>Difficulty: <b>{currentQuestion.difficulty}</b></h2>
            </div>
            <h3 style={{marginTop: 40}}>{currentQuestion.question}</h3>
            <form className="form d-flex direction-column align-start">
                {responseOptionsInputs}
            </form>

            <button className="answerButton" onClick={onAnswerClick}>
                Answer
                <img width={35} height={35} src={rightArrow} alt="rightArrow"/>
            </button>
        </div>
    )
}