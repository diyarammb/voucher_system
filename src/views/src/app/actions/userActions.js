import axios from "axios";
import Cookies from "js-cookie";
export const USER_REQUEST = "USER_REQUEST";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_FAILURE = "USER_FAILURE";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

// Generic action creators
const requestAction = (type) => ({ type });
const successAction = (type, payload) => ({ type, payload });
const failureAction = (type, payload) => ({ type, payload });

export const addUser = (userData) => {
  return (dispatch) => {
    dispatch(requestAction(USER_REQUEST));
    axios
      .post("http://localhost:5454/api/users/register", userData)
      .then((response) => {
        dispatch(successAction(USER_SUCCESS, response.data.message));
      })
      .catch((error) => {
        dispatch(failureAction(USER_FAILURE, error.message));
      });
  };
};

// Login functions start here
export const userLogin = (userlogin, navigate) => {
  return (dispatch) => {
    dispatch(requestAction(USER_LOGIN_REQUEST));

    axios
      .post("http://localhost:5454/api/users/login", userlogin,{ withCredentials: true,})
      .then((response) => {
        dispatch(successAction(USER_LOGIN_SUCCESS, response.data.message));
        Cookies.set("isLogged", true);
        navigate("/dashboard");
      })
      .catch((error) => {
        dispatch(failureAction(USER_LOGIN_FAILURE, error.message));
      });
  };
};
