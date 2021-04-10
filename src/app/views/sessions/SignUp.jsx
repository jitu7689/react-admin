import React, { Component } from "react";
import {
  Card,
  Grid,
  Button
} from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { connect } from "react-redux";
import IDMaskedInput from "./components/IDMaskedInput";
import ZipCodeNumbers from "./components/ZipCodeNumbers";
import CountryStateCity from '../../countriesStatesCities.json';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      companyName: "",
      addrOne: "",
      addrTwo: "",
      city: "",
      state: "",
      country: "",
      zipcode: "",
      phone: "",
      adminEmail: "",
      adminPassword: "",
      stateList: [],
      cityList: [],
    };
  }

  handleChange = event => {
    event.persist();
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleChangeCountry = event => {
    event.persist();
    let stateList = [];
    for (let item of CountryStateCity) {
      if (event.target.value === item.name) {
        stateList = item.states
      }
    }
    this.setState({
      country: event.target.value,
      stateList: stateList
    });
  };
  handleChangeState = event => {
    event.persist();
    let cityList = [];
    for (let item of this.state.stateList) {
      if (event.target.value === item.name) {
        cityList = item.cities
      }
    }
    this.setState({
      state: event.target.value,
      cityList: cityList
    });
  };
  handleFormSubmit = event => {
    
  };
  render() {
    let { firstName, lastName, companyName, addrOne, addrTwo, city, state, country, zipcode, phone, adminEmail, adminPassword } = this.state;
    return (
      <div className="signup flex flex-center w-100">
        <div className="p-8">
          <Card className="signup-card position-relative y-center">
            <Grid container>
              <Grid item lg={5} md={5} sm={5} xs={12}>
                <div className="p-32 flex flex-center bg-light-gray flex-middle h-100">
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
                  <img
                    src="/assets/images/illustrations/posting_photo.svg"
                    alt=""
                  />
                </div>
              </Grid>
              <Grid item lg={7} md={7} sm={7} xs={12}>
                <div className="p-36 h-100">
                  <h3 className="text-center pb-20">Register a company</h3>
                  <ValidatorForm ref="form" onSubmit={this.handleFormSubmit}>
                    <Grid container spacing={3}>
                      
                      <Grid item xs={6}>
                        <TextValidator
                          className="mb-24 w-100"
                          variant="outlined"
                          label="Company name"
                          onChange={this.handleChange}
                          type="text"
                          name="companyName"
                          value={companyName}
                          validators={["required"]}
                          errorMessages={["this field is required"]}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextValidator
                          className="mb-24 w-100"
                          variant="outlined"
                          label="Address 1"
                          onChange={this.handleChange}
                          type="text"
                          name="addrOne"
                          value={addrOne}
                          validators={["required"]}
                          errorMessages={["this field is required"]}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextValidator
                          className="mb-24 w-100"
                          variant="outlined"
                          label="Address 2"
                          onChange={this.handleChange}
                          type="text"
                          name="addrTwo"
                          value={addrTwo}
                          validators={["required"]}
                          errorMessages={["this field is required"]}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextValidator
                          className="mb-24 w-100"
                          variant="outlined"
                          label="Country"
                          onChange={this.handleChangeCountry}
                          select
                          name="country"
                          value={country}
                          validators={["required"]}
                          errorMessages={["this field is required"]}
                        >
                          {
                            CountryStateCity.map((op, i) => <MenuItem key={i} value={op.name}>{op.name}</MenuItem>)
                          }
                        </TextValidator>
                      </Grid>
                      <Grid item xs={6}>
                        <TextValidator
                          className="mb-24 w-100"
                          variant="outlined"
                          label="State"
                          onChange={this.handleChangeState}
                          select
                          name="state"
                          value={state}
                          validators={["required"]}
                          errorMessages={["this field is required"]}
                        >
                          {
                            this.state.stateList.map((op, i) => <MenuItem key={i} value={op.name}>{op.name}</MenuItem>)
                          }
                        </TextValidator>
                      </Grid>
                      <Grid item xs={6}>
                        <TextValidator
                          className="mb-24 w-100"
                          variant="outlined"
                          label="City"
                          onChange={this.handleChange}
                          select
                          name="city"
                          value={city}
                        >
                          {
                            this.state.cityList.map((op, i) => <MenuItem key={i} value={op.name}>{op.name}</MenuItem>)
                          }
                        </TextValidator>
                      </Grid>
                      
                      <Grid item xs={6}>
                        <TextValidator
                          className="mb-24 w-100"
                          variant="outlined"
                          label="Zipcode"
                          name="zipcode"
                          value={zipcode}
                          InputProps={{
                            inputComponent: ZipCodeNumbers,
                            inputProps: {
                              onChange: this.handleChange
                            }
                          }}
                          validators={["required"]}
                          errorMessages={["this field is required"]}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextValidator
                          className="mb-24 w-100"
                          variant="outlined"
                          label="Phone number"
                          name="phone"
                          value={phone}
                          InputProps={{
                            inputComponent: IDMaskedInput,
                            inputProps: {
                              onChange: this.handleChange
                            }
                          }}
                          validators={["required"]}
                          errorMessages={["this field is required"]}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <h3 className="text-center">Register a admin</h3>
                      </Grid>
                      <Grid item xs={6}>
                        <TextValidator
                          className="mb-24 w-100"
                          variant="outlined"
                          label="First name"
                          onChange={this.handleChange}
                          type="text"
                          name="firstName"
                          value={firstName}
                          validators={["required"]}
                          errorMessages={["this field is required"]}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextValidator
                          className="mb-24 w-100"
                          variant="outlined"
                          label="Last name"
                          onChange={this.handleChange}
                          type="text"
                          name="lastName"
                          value={lastName}
                          validators={["required"]}
                          errorMessages={["this field is required"]}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextValidator
                          className="mb-24 w-100"
                          variant="outlined"
                          label="Email"
                          onChange={this.handleChange}
                          type="email"
                          name="adminEmail"
                          value={adminEmail}
                          validators={["required", "isEmail"]}
                          errorMessages={[
                            "this field is required",
                            "email is not valid"
                          ]}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextValidator
                          className="mb-16 w-100"
                          label="Password"
                          variant="outlined"
                          onChange={this.handleChange}
                          name="adminPassword"
                          type="password"
                          value={adminPassword}
                          validators={["required"]}
                          errorMessages={["this field is required"]}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <div className="text-center">
                          <Button
                            className="capitalize"
                            variant="contained"
                            color="primary"
                            type="submit"
                          >
                            Register now
                          </Button>
                        </div>
                      </Grid>]
                    </Grid>
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
  // setUser: PropTypes.func.isRequired
});

export default connect(
  mapStateToProps,
  {}
)(SignUp);
