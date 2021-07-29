import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {privateRoutes as _priv} from "@Routes/exactRoutes"

const PublicRoute = props => {
  const {isAuthenticated, component: Component, ...rest} = props
  return (
    <Route {...rest}
      component={(props) => (
        (!isAuthenticated)
          ? (<Component {...props} />)
          : (<Redirect to={_priv().dashboard} />)
      )}
    />
  )
}

export default PublicRoute;