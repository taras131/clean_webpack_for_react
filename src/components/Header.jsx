import React from "react";
import logo from "../images/logo.png"
import {useSelector} from "react-redux";
import {getTotalNumberQuestions} from "../redux/questionsSelector";

const Header = () => {
    const totalNumberQuestions = useSelector(state => getTotalNumberQuestions(state))
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center leftHeader">
                <img src={logo} alt="logo"/>
                <div className="headerInfo d-flex direction-column align-start justify-center">
                    <h3>Questionnaire</h3>
                    <p>answer {totalNumberQuestions} questions</p>
                </div>
            </div>
            <div className="rightHeader">
                <h3>Test task</h3>
            </div>
        </header>
    )
}
export default Header