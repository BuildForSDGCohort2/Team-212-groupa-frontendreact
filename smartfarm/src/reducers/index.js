import { combineReducers } from "redux";
import auth from "./auth";
import errorReducer from "./errors";
import messageReducer from "./messages";
import articles from "./articles";

const rootReducer = combineReducers({
  auth,
  errorReducer,
  messageReducer,
  articles,
});

export default rootReducer;
