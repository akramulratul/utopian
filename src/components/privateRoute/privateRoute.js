import React from "react";
import jwt_decode from "jwt-decode";
import { Redirect, Route } from "react-router";


const PrivateRoute = ({ children, ...rest }) => {
 
  return (
    <Route
      {...rest}
      render={({ location }) =>
      localStorage.getItem("userInfo") && jwt_decode(JSON.parse(localStorage.getItem("userInfo")).data.token).scopes==="USER" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
