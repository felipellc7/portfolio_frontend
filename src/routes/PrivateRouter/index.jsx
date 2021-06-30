import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import DashboardScreen from "../../pages/DashboardScreen"

const PrivateRouter = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/dashboard" component={DashboardScreen} />
				<Redirect to="/dashboard" />
			</Switch>
		</BrowserRouter>
	);
};

export default PrivateRouter;