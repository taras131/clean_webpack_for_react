import React from "react";
import rightArrow from "../images/right-arrow.png";

export const Result = ({answersList}) => {
    const onAgainClick = () => {
        window['location']['reload']()
    }
    const answers = answersList.map((item, index) => {
        return (
            <tr key={`${index}_${item.answer}`} className={item.isCorrectAnswer ? "correct" : "inCorrect"}>
                <td>{item.question}</td>
                <td>{item.difficulty}</td>
                <td>{Array.isArray(item.answer) ? item.answer.join(", ") : item.answer}</td>
                <td>{Array.isArray(item.correctAnswer) ? item.correctAnswer.join(", ") : item.correctAnswer}</td>
            </tr>
        )
    })
    const correctAnswerCount = answersList.filter(item => item.isCorrectAnswer === true).length
    return (
        <div className="questions d-flex direction-column align-center">
            <h2>Your results: <b>{correctAnswerCount} / {answersList.length}</b></h2>
            <div className="p-0">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Question</th>
                        <th>Difficulty</th>
                        <th>Your answer</th>
                        <th>Correct Answer</th>
                    </tr>
                    </thead>
                    <tbody>
                    {answers}
                    </tbody>
                </table>
            </div>
            <button className="answerButton" onClick={onAgainClick}>
                Try again
                <img width={35} height={35} src={rightArrow} alt="rightArrow"/>
            </button>
        </div>
    )
}