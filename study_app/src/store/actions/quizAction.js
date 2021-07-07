import axios from "axios";

export const FETCH_QUIZZES_START = "FETCH_QUIZZES_START";
export const FETCH_QUIZZES_SUCCESS = "FETCH_QUIZZES_SUCCESS";
export const FETCH_QUIZZES_FAIL = "FETCH_QUIZZES_FAIL";

export const CREATE_QUIZ_START = "CREATE_QUIZ_START";
export const CREATE_QUIZ_SUCCESS = "CREATE_QUIZ_SUCCESS";
export const CREATE_QUIZ_FAIL = "CREATE_QUIZ_FAIL";

export const getQuizzes = () => dispatch => {
  dispatch({ type: FETCH_QUIZZES_START });

  axios
    .get("https://lambda-study-app.herokuapp.com/api/quizzes")
    .then(res => dispatch({ type: FETCH_QUIZZES_SUCCESS, quizzes: res.data }))
    .catch(err => dispatch({ type: FETCH_QUIZZES_FAIL, err }));
};

export const addQuiz = quiz => (dispatch, getState) => {
  dispatch({ type: CREATE_QUIZ_START });

  axios
    .post("https://lambda-study-app.herokuapp.com/api/quizzes", quiz)
    .then(dispatch({ type: CREATE_QUIZ_SUCCESS }))
    .catch(err => dispatch({ type: CREATE_QUIZ_FAIL, err }));
};
