import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers";
import storage from "../utils/storage";
import crashReporter from "../middleware";

import { createBrowserHistory as Browser} from 'history'

import { connectRouter, routerMiddleware} from 'connected-react-router'

const history = Browser();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(
  applyMiddleware(routerMiddleware(history), logger, crashReporter, thunk),
  storage(),
);

export default function(initialState) {
  const store = createStore(connectRouter(history)(rootReducer, initialState), initialState, enhancer);

  if (module.hot) {
    module.hot.accept("../reducers", () => {
      const nextRootReducer = require("../reducers");
      store.replaceReducer(connectRouter(history)(nextRootReducer));
    });
    return store;
  }
}
