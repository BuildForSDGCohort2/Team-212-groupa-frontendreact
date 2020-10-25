import {
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAIL,
} from "../types/types";

const initialState = {
  articlesLoaded: false,
  articlesLoading: false,
  articles: [],
};

export const articles = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES_REQUEST:
      return {
        ...state,
        articlesLoading: true,
      };
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        articlesLoading: false,
        articlesLoaded: true,
        articles: action.payload,
      };
    case GET_ARTICLES_FAIL:
      return {
        ...state,
        ariticlesLoading: false,
        articlesLoaded: false,
        articles: [],
      };
    default:
      return state;
  }
};

export default articles;
