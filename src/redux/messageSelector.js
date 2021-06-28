export const getMessage=(state)=> {
    return {text: state.messageInfo.text ,isShow: state.messageInfo.isShow, isPositive: state.messageInfo.isPositive}
}