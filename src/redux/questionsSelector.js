export const getTotalNumberQuestions = (state) => {
    return state.questionsInfo.questionsList.length
}
export const getCurrentQuestionNumber = (state) => {
    return state.questionsInfo.currentQuestionNumber
}
export const getIsLoading = (state) => {
    return state.questionsInfo.isLoading
}
export const getCurrentQuestion = (state,currentQuestionNumber) => {
    return state.questionsInfo.questionsList[currentQuestionNumber]
}
export const getAnswersList = (state) => {
    const answersListEasy = state.questionsInfo.answersList.filter(item => item.difficulty === "easy")
    const answersListMedium = state.questionsInfo.answersList.filter(item => item.difficulty === "medium")
    const answersListHard = state.questionsInfo.answersList.filter(item => item.difficulty === "hard")
    return  answersListEasy.concat(answersListMedium).concat(answersListHard)
}