import axios from "axios";
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  GET_ERRORS,
  LOGOUT_SUCCESS,
} from "../types/types";
import { createMessage } from "../actions/messages";

export const loadUser = () => (dispatch, getState) => {
  //User loading
  dispatch({
    type: USER_LOADING,
  });

  //Get token from state
  const token = getState().auth.token;
  //headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  //if token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  axios
    .get("https://smartfarmendpoints.herokuapp.com/api/auth/user", config)
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });

      dispatch({
        type: AUTH_ERROR,
      });
    });
};

//LOGIN USER

export const login = (username, password) => (dispatch) => {
  let data = JSON.stringify({ username, password });

  let config = {
    method: "post",
    url: "https://smartfarmendpoints.herokuapp.com/api/auth/login",
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };

  axios(config)
    .then(function (response) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });
      dispatch(loadUser());
    })
    .catch(function (error) {
      const errors = {
        msg: error.response.data,
        status: error.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

//REGISTER USER

export const register = (username, email, password) => (dispatch) => {
  let data = JSON.stringify({ username, email, password });
  let config = {
    method: "post",
    url: "https://smartfarmendpoints.herokuapp.com/api/auth/register",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  axios(config)
    .then((res) => {
      dispatch(
        createMessage({
          AccountCreated: "Account created successfully",
        })
      );
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) => {
      const errors = {
        msg: error.response.data,
        status: error.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  //Get Token from state
  const token = getState().auth.token;

  //Headers
  const config = {
    method: "post",
    url: "https://smartfarmendpoints.herokuapp.com/api/auth/logout/",
    headers: {
      "Content-Type": "application/json",
    },
    data: null,
  };

  //if token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  axios(config)
    .then(() => {
      dispatch({ type: LOGOUT_SUCCESS });
      window.location.reload(false);
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};
