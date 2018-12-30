import {
  LOGGING_IN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTERING,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "../actions/authAction";

const initState = {
  loggingIn: false,
  isLoggedIn: false,
  registering: false,
  authErr: null,
  user: {},
  token: ""
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGGING_IN:
      console.log("logging in");
      return {
        ...state,
        loggingIn: true,
        isLoggedIn: false,
        authErr: null
      };
    case LOGIN_SUCCESS:
      console.log("login success");
      return {
        ...state,
        loggingIn: false,
        isLoggedIn: true,
        authErr: null,
        user: action.payload.user,
        token: action.payload.token
      };
    case LOGIN_FAIL:
      console.log("login fail");
      return {
        ...state,
        loggingIn: false,
        isLoggedIn: false,
        authErr: action.err
      };

    case REGISTERING:
      console.log("registering");
      return {
        ...state,
        loggingIn: true,
        isLoggedIn: false,
        authErr: null
      };
    case REGISTER_SUCCESS:
      console.log("register success");
      return {
        ...state,
        loggingIn: false,
        isLoggedIn: true,
        authErr: null,
        user: action.payload.user,
        token: action.payload.token
      };
    case REGISTER_FAIL:
      console.log("register fail");
      return {
        ...state,
        loggingIn: false,
        isLoggedIn: false,
        authErr: action.err
      };

    default:
      return state;
  }
};

export default authReducer;
