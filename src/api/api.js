import axios from "axios";

const host = "https://opentdb.com"
export const questionsAPI = {
    getQuestions() {
        return axios.get(`${host}/api.php?amount=10&category=22&type=multiple`)
            .then(response => response.data)
    }
}