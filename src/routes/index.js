import React from "react";
import { Route, Switch } from "react-router";

import App from "../containers/App";
import Header from "../components/Header";

const routes = (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </div>
);

export default routes;
