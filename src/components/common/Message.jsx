import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {resetMessageInfo} from "../../redux/messageReducer";
import {getMessage} from "../../redux/messageSelector.js"

export const Message = () => {
    const {text, isShow, isPositive} = useSelector(state => getMessage(state))
    const dispatch = useDispatch()
    useEffect(()=> {
        if(isShow){
            setTimeout(()=>{
                dispatch(resetMessageInfo())
            }, 3000)
        }
    },[isShow])
    let messageStyle = ""
    if(isShow){
        messageStyle = "message_window_wrapper"
    } else {
        messageStyle = "message_window_wrapper message_window_hidden"
    }
    if(isPositive){
        messageStyle += " positive"
    }
    return (
        <div className={messageStyle}>
            <div className="message_window_content">{text}</div>
        </div>
    )
}