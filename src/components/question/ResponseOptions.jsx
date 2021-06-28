import React from "react";

export const ResponseOptions = ({item,correctAnswerList,choice,onInputChange}) => {
    return(
        <label className="d-flex align-center">
            <input
                className = "checkbox"
                type={correctAnswerList.length > 1 ? "checkbox" : "radio"}
                checked={choice.indexOf(item) === -1 ? false : true}
                name={item}
                value={item}
                onChange={onInputChange}/>
            <span className="checkboxStyle"></span>
            <span className="labelText">{item}</span>
        </label>
    )
}