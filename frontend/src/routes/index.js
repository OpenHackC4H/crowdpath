import React from "react";
import { Route, Switch } from "react-router";

import App from "../containers/App";
import DetailedView from "../containers/DetailedView";
import Header from "../components/Header";

const routes = (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/DetailedView/:id" component={DetailedView} />
    </Switch>
  </div>
);

export default routes;
