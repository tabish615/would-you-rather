import { combineReducers } from "redux";
import myUser from "./myUser";
import questions from "./questions";
import users from "./users";

export default combineReducers({
  myUser,
  questions,
  users
});
