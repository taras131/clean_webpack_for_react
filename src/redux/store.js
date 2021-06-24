import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import questionsReducer from "./questionsReducer.js";

let reducersList = combineReducers({
    questionsInfo: questionsReducer,
})
let store = createStore(reducersList, applyMiddleware(thunk))
export default store