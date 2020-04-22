import { saveQuestion, saveQuestionAnswer } from "../config/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

function addQuestion({ id, timestamp, author, optionOne, optionTwo }) {
  return {
    type: ADD_QUESTION,
    id,
    timestamp,
    author,
    optionOne,
    optionTwo
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { myUser } = getState();

    const questionInfo = {
      optionOneText,
      optionTwoText,
      author: myUser
    };

    //dispatching this here and not after api success cause of frequent error in creating question
    //dispatch(addQuestion(formatNewQuestion(questionInfo)))

    return saveQuestion(questionInfo)
      .then(question => {
        console.log("created QUESTION", question);
        dispatch(addQuestion(question));
      })
      .catch(error => {
        console.log("There was a problem saving question.");
        alert("There was a problem creating new question. Try again ");
      });
  };
}

function addAnswer({ myUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    myUser,
    qid,
    answer
  };
}

export function handleAddAnswer(info) {
  return dispatch => {
    //assuming answer gets updated correctly
    dispatch(addAnswer(info));
    return saveQuestionAnswer(info)
      .then(() => console.log("recorded answer"))
      .catch(error => {
        console.log("There was a problem saving question.");
      });
  };
}
