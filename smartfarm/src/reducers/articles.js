import {
  GET_ARTICLES_REQUEST,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAIL,
  ARTICLE_LOADED,
} from "../types/types";

const initialState = {
  articlesLoaded: false,
  articlesLoading: false,
  articles: [],
  article: null,
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
    case ARTICLE_LOADED:
      return {
        ...state,
        article: action.payload,
      };
    default:
      return state;
  }
};

export default articles;
