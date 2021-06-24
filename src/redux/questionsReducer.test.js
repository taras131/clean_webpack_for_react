import questionsReducer from "./questionsReducer.js";
const {setIsLoading} = require("./questionsReducer.js");

const initialState= {
    isLoading: true,
    currentQuestionNumber: 0,
    questionsList: [],
    answersList: []
}

//it(`isLoading should be false`,()=> {
//    const action = setIsLoading(false)
//    const newState = questionsReducer(initialState , action)
//    expect(newState.isLoading).toBe(false)
//})