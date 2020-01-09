import rootReducer from "../reducers";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const enhancers = [];
const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

export default initialState => {
  return createStore(rootReducer, initialState, composedEnhancers);
};
