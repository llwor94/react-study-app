import authReducer from "./authReducer";
import quizReducer from "./quizReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  quiz: quizReducer
});

export default rootReducer;
