const SET_MESSAGE = "SET_MESSAGE"
const RESET_MESSAGE = "RESET_MESSAGE"
const initialState = {
    text: "",
    isShow: false,
    isPositive: false
}
const MessageInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGE:
            return {...state, text: action.text, isShow: true, isPositive: action.isPositive}
        case RESET_MESSAGE:
            return {...state, isShow: false, isPositive: false}
        default:
            return state
    }
}
export const setMessageInfo = (text, isPositive = false) => ({type: SET_MESSAGE, text, isPositive})
export const resetMessageInfo = () => ({type: RESET_MESSAGE})

export default MessageInfoReducer;