import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

let mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth
  };
}

export const withAuthRedurect = (Component) => {
  const RedirectComponent = (props) => {
    if (!props.isAuth) return <Redirect to="/login" />
    return <Component {...props} />
  }

  const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
  
  return ConnectedAuthRedirectComponent;
}