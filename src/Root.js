import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// import reduxPromise from "redux-promise";
import async from "middlewares/async";
import stateValidator from "middlewares/stateValidator";
import reducers from "reducers"; // if we provide directory name only, node will be default import index.js file

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(async, stateValidator)
  );

  return <Provider store={store}>{children}</Provider>;
};
