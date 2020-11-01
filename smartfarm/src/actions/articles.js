import {
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAIL,
  GET_ERRORS,
  ADD_ARTICLES_FAIL,
  ADD_ARTICLES_SUCCESS,
  ADD_ARTICLES_REQUEST,
  ARTICLE_LOADING,
  ARTICLE_LOADED,
  FETCH_ARTICLE_FAIL,
} from "../types/types";
import axios from "axios";
// import { createMessage } from "./messages";

export const loadArticles = (stage) => async (dispatch, getState) => {
  dispatch({
    type: GET_ARTICLES_REQUEST,
  });

  //Get token from state
  const token = getState().auth.token;

  const data = JSON.stringify({ stage });

  let config = {
    method: "post",
    url: `https://smartfarmendpoints.herokuapp.com/api/blog/articles/stage`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  //if token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  console.log(config);
  try {
    const response = await axios(config);
    console.log(response);
    dispatch({
      type: GET_ARTICLES_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    const errors = { msg: err.response.data, status: err.response.status };
    dispatch({
      type: GET_ERRORS,
      payload: errors,
    });
    dispatch({
      type: GET_ARTICLES_FAIL,
    });
  }
};

export const loadAllArticles = () => async (dispatch) => {
  dispatch({
    type: GET_ARTICLES_REQUEST,
  });
  try {
    const response = await axios.get(
      `https://smartfarmendpoints.herokuapp.com/api/blog/articles`
    );
    dispatch({
      type: GET_ARTICLES_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    const errors = { msg: err.response.data, status: err.response.status };
    dispatch({
      type: GET_ERRORS,
      payload: errors,
    });
    dispatch({
      type: GET_ARTICLES_FAIL,
    });
  }
};

export const loadArticle = (slug) => async (dispatch) => {
  dispatch({ type: ARTICLE_LOADING });
  let config = {
    method: "get",
    url: `https://smartfarmendpoints.herokuapp.com/api/blog/article/detail/${slug}`,
  };

  try {
    const response = await axios(config);
    dispatch({
      type: ARTICLE_LOADED,
      payload: response.data,
    });
  } catch (err) {
    const errors = {
      msg: err.response.data,
      status: err.response.status,
    };
    dispatch({
      type: GET_ERRORS,
      payload: errors,
    });
    dispatch({ type: FETCH_ARTICLE_FAIL });
  }
};

export const addArticles = (crop, farmer, title, stage, content) => (
  dispatch
) => {
  dispatch({
    type: ADD_ARTICLES_REQUEST,
  });

  var data = JSON.stringify({
    crop: "1",
    farmer: farmer,
    title: title,
    stage: stage,
    content: content,
  });

  var config = {
    method: "post",
    url: "https://smartfarmendpoints.herokuapp.com/api/blog/article",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      dispatch({
        type: ADD_ARTICLES_SUCCESS,
        payload: response.data,
      });
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
        type: ADD_ARTICLES_FAIL,
      });
    });
};
