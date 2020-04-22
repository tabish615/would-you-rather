import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={function(props) {
        return rest.myUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        );
      }}
    />
  );
}

function mapStateToProps({ myUser }) {
  return {
    myUser
  };
}

export default withRouter(connect(mapStateToProps)(ProtectedRoute));
