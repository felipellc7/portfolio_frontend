import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateContainer from "../../containers/PrivateContainer";

import {PrivateRoute, PublicRoute} from "../../routes/RouteType";
import LoginScreen from "../../pages/LoginScreen";
import CurriculumScreen from "../../pages/CurriculumScreen";
import {publicRoutes as _pub} from "./../exactRoutes"

const PublicRouter = () => {
  // const { user } = useContext(AuthContext);
  const user = false
  const logged = user.isLogged;

  return (
    <Router>
      <Switch>
        <PublicRoute exact path={_pub().cv} component={CurriculumScreen} isAuthenticated={logged} />
        <PublicRoute exact path={_pub().login} component={LoginScreen} isAuthenticated={logged} />
        <PrivateRoute path="/" component={PrivateContainer} isAuthenticated={logged} />
      </Switch>
    </Router>
  );
};

export default PublicRouter;