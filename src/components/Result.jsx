import React from "react";

export const Result = ({answersList}) => {
    const onAgainClick = () => {
        window['location']['reload']()
    }
    const answers = answersList.map((item, index)=> {
        return(
            <tr key ={`${index}_${item.answer}`} className={item.isCorrectAnswer ? "correct" : "inCorrect"}>
                <td>{item.question}</td>
                <td>{item.difficulty}</td>
                <td>{Array.isArray(item.answer) ? item.answer.join(", ") : item.answer}</td>
                <td>{Array.isArray(item.correctAnswer) ? item.correctAnswer.join(", ") : item.correctAnswer}</td>
            </tr>
        )
    })
    return(
        <div className="d-flex direction-column justify-center align-center">
            <h3>Your results</h3>
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

            <button onClick={onAgainClick}>Try again</button>
        </div>
    )
}