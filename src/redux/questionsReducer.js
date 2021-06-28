import {questionsAPI} from "../api/api.js";

const SET_QUESTIONS = "SET_QUESTIONS",
    SET_IS_LOADING = "SET_IS_LOADING",
    ADD_ANSWER = "ADD_ANSWER",
    SET_CURRENT_QUESTION_NUMBER = "SET_CURRENT_QUESTION_NUMBER"
const initialState = {
    isLoading: true,
    currentQuestionNumber: 0,
    questionsList: [],
    answersList: []
}
const questionsReducer = (state = initialState, action) =>{
    switch (action.type){
        case SET_QUESTIONS:
            return {...state,questionsList: action.questionsList}
        case SET_IS_LOADING:
            return {...state,isLoading: action.payload}
        case SET_CURRENT_QUESTION_NUMBER:
            return {...state, currentQuestionNumber: state.currentQuestionNumber + 1}
        case ADD_ANSWER:
            return {...state, answersList: [...state.answersList, action.answer]
            }
        default:
            return state
    }
}
export const setQuestions = (questionsList) => ({type: SET_QUESTIONS, questionsList})
export const setIsLoading = (payload) => ({type: SET_IS_LOADING, payload})
export const setCurrentQuestionNumber = () => ({type: SET_CURRENT_QUESTION_NUMBER})
export const addAnswer = (answer) => ({type: ADD_ANSWER, answer})
export const getQuestions = () => async (dispatch) =>{
    dispatch(setIsLoading(true))
    const response = await questionsAPI.getQuestions()
    if(response.response_code === 0) {
        dispatch(setQuestions(response.results))
    } else {

    }
    dispatch(setIsLoading(false))
}
export default questionsReducer