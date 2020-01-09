import podcasts from "./podcasts_reducer.js";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  podcasts
});

export default rootReducer;
