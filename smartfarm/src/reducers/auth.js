import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    // LOGOUT_SUCCESS,
    LOGIN_FAIL,
    REGISTER_SUCCESS,
  } from "../types/types";
  
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    isLoading: false,
    user: null,
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case USER_LOADING:
        return {
          ...state,
          isLoading: true,
        };
  
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          isLoading: false,
          user: action.payload,
        };
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
        localStorage.setItem("token", action.payload.token);
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true,
          isLoading: false,
        };
      case AUTH_ERROR:
      case LOGIN_FAIL:
        return {
          ...state,
          token: null,
          isLoading: false,
          isAuthenticated: false,
          user: null,
        };
      default:
        return state;
    }
  }
  