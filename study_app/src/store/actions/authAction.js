import axios from "axios";

export const LOGGING_IN = "LOGGING_IN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const REGISTERING = "REGISTERING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const signIn = credentials => dispatch => {
  dispatch({ type: LOGGING_IN });

  axios
    .post("https://lambda-study-app.herokuapp.com/api/auth/login", credentials)
    .then(res => {
      console.log(res);
      dispatch({ type: LOGIN_SUCCESS, payload: res });
    })
    .catch(err => dispatch({ type: LOGIN_FAIL, err }));
};

export const signUp = userInfo => dispatch => {
  dispatch({ type: REGISTERING });

  axios
    .post("https://lambda-study-app.herokuapp.com/api/auth/register", userInfo)
    .then(res => {
      console.log(res);
      dispatch({ type: REGISTER_SUCCESS, payload: res });
    })
    .catch(err => dispatch({ type: REGISTER_FAIL, err }));
};
