import React from "react";

const Header = () => {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex leftHeader">
                <div className="headerInfo">
                    <h3>Questionnaire</h3>
                    <p>answer ten questions</p>
                </div>
            </div>
            <div className="rightHeader">
                <h3>Test task</h3>
            </div>
        </header>
    )
}
export default Header