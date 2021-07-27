import { combineReducers } from "redux";
import tasks from "./state";
import auth from "./auth";

const reducers = combineReducers({
  auth,
  tasks,
});

export default reducers;
