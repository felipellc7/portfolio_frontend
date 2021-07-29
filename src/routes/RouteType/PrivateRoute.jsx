import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {publicRoutes as _pub} from "@Routes/exactRoutes"

const PrivateRoute = props => {
  const {isAuthenticated, component: Component, ...rest} = props
  return (
    <Route {...rest}
      component={(props) => (
        (isAuthenticated) 
          ? (<Component {...props} />)
          : (<Redirect to={_pub().cv} />)
      )}
    />
  )
}

export default PrivateRoute;