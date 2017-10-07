import React from "react";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import routes from "./routes";

const RouteContainer = ({ history }) => {
  return (
    <div>
      <ConnectedRouter history={history}>{routes}</ConnectedRouter>
    </div>
  );
};

RouteContainer.propTypes = {
  history: PropTypes.object
};

export default RouteContainer;
