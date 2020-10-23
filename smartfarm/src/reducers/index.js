import { combineReducers } from "redux";
import auth from "./auth";
import errorReducer from "./errors";
import messageReducer from "./messages";

const rootReducer = combineReducers({
  auth,
  errorReducer,
  messageReducer,
});

export default rootReducer;
