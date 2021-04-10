import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AppContext from "app/appContext";

class AuthGuard extends Component {
  constructor(props, context) {
    super(props);

    this.state = {
    };
  }

  render() {
    let { children } = this.props;
    return <Fragment>{children}</Fragment>;
  }
}

AuthGuard.contextType = AppContext;

const mapStateToProps = state => ({
});

export default withRouter(connect(mapStateToProps)(AuthGuard));
