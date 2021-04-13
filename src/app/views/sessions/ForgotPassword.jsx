import React, { Component } from "react";
import {
  Card,
  Grid,
  Button,
} from "@material-ui/core";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { withRouter } from "react-router-dom";

import { resetPassword } from "../../redux/actions/LoginActions";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

class ForgotPassword extends Component {
  state = {
    email: "watson@example.com"
  };
  handleChange = event => {
    event.persist();
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleFormSubmit = () => {
    this.props.resetPassword({ ...this.state });
  };
  render() {
    let { email } = this.state;

    return (
      <div className="signup flex flex-center w-100 h-100vh">
        <div className="p-8">
          <Card className="signup-card position-relative y-center">
            <Grid container>
              <Grid item lg={5} md={5} sm={5} xs={12}>
                <div className="p-32 flex flex-center flex-middle h-100">
                  <div className="back-to-signin">
                    <Button
                      className="capitalize"
                      color="primary"
                      onClick={() =>
                        this.props.history.push("/")
                      }
                    >
                      <ArrowBackIosIcon /> Back to Sign in
                        </Button>
                  </div>
                  <h3 className="text-center top-55 postion-abs ">HiRise Technologies</h3>
                  <img src="/assets/images/illustrations/dreamer.svg" alt="" className="pdingtop-85"/>
                </div>
              </Grid>
              <Grid item lg={7} md={7} sm={7} xs={12}>
                <div className="p-36 h-100 bg-light-gray position-relative">
                  <h3 className="text-center pb-20">Forgot Password</h3>
                  <ValidatorForm ref="form" onSubmit={this.handleFormSubmit}>
                    <TextValidator
                      className="mb-24 w-100"
                      variant="outlined"
                      label="Email"
                      onChange={this.handleChange}
                      type="email"
                      name="email"
                      value={email}
                      validators={["required", "isEmail"]}
                      errorMessages={[
                        "this field is required",
                        "email is not valid"
                      ]}
                    />
                    <div className="text-center">
                      <Button variant="contained" color="primary" type="submit">
                        Forgot Password
                      </Button>
                    </div>
                  </ValidatorForm>
                </div>
              </Grid>
            </Grid>
          </Card>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  resetPassword: PropTypes.func.isRequired,
  login: state.login
});
export default withRouter(
  connect(
    mapStateToProps,
    { resetPassword }
  )(ForgotPassword)
);
