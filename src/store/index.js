import rootReducer from "../reducers";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import audio from "../middleware/audio";

const enhancers = [];
const middleware = [thunk, audio];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default initialState => {
  return createStore(rootReducer, initialState, composedEnhancers);
};
