import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RouteContainer from "./RouteContainer";
import registerServiceWorker from "./registerServiceWorker";
import { createBrowserHistory as Browser } from "history";

import "bootstrap/dist/css/bootstrap.css";

import { Provider } from "react-redux";

import configureStore from "./store/configureStore";

const history = Browser();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <RouteContainer history={history} />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
