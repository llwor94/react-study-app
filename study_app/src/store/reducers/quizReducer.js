import {
  FETCH_QUIZZES_START,
  FETCH_QUIZZES_SUCCESS,
  FETCH_QUIZZES_FAIL,
  CREATE_QUIZ_START,
  CREATE_QUIZ_SUCCESS,
  CREATE_QUIZ_FAIL
} from "../actions/quizAction";

const initState = {
  quizzes: [],
  fetchingQuizzes: false,
  addingQuiz: false,
  err: null
};

const quizReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_QUIZZES_START:
      return {
        ...state,
        fetchingQuizzes: true
      };
    case FETCH_QUIZZES_SUCCESS:
      return {
        ...state,
        fetchingQuizzes: false,
        err: null,
        quizzes: action.quizzes
      };
    case FETCH_QUIZZES_FAIL:
      return {
        ...state,
        fetchingQuizzes: false,
        err: action.err
      };

    case CREATE_QUIZ_START:
      return {
        ...state,
        addingQuiz: true
      };
    case CREATE_QUIZ_SUCCESS:
      return {
        ...state,
        addingQuiz: false,
        err: null
      };
    case CREATE_QUIZ_FAIL:
      return {
        ...state,
        addingQuiz: false,
        err: action.err
      };

    default:
      return state;
  }
};

export default quizReducer;
