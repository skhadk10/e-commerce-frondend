import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const PrivateRoute = ({ children, ...rest }) => {
  const location = useLocation();
  const { isAuthorised } = useSelector((state) => state.Login);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthorised ? (
          children
        ) : (
          <Redirect to={{ pathname: "/signIn", state: { from: location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
