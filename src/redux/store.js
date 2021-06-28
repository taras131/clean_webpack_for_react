import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import questionsReducer from "./questionsReducer.js";
import messageReducer from "./messageReducer";

let reducersList = combineReducers({
    questionsInfo: questionsReducer,
    messageInfo: messageReducer,
})
let store = createStore(reducersList, applyMiddleware(thunk))
export default store