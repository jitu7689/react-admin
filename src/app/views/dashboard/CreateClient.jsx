import React, { Component, Fragment } from "react";
import {
    Grid,
    Button,
    // Checkbox,
    // FormControlLabel
} from "@material-ui/core";

import { Breadcrumb } from "matx";
import { withStyles } from "@material-ui/styles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import CountryStateCity from '../../countriesStatesCities.json';
import ZipCodeNumbers from "../sessions/components/ZipCodeNumbers";
import IDMaskedInput from "../sessions/components/IDMaskedInput";
import MenuItem from '@material-ui/core/MenuItem';
import Layout from "../../Layout/Layout1/Layout1";
class CreateClient extends Component {
    constructor(props) {
        super(props);

        this.state = {
            client_name: "",
            addr_one: "",
            addr_two:"",
            city:"",
            state:"",
            country: "",
            zipcode: "",
            phone:"",
            vendor_supplier:"",
            description:"",
            default_discount_percentage:"",
            default_terms:"",
            
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

    handleChangeCheckBox = event => {
        event.persist();
        this.setState({
            [event.target.name]: event.target.checked
        });
    };
    handleFormSubmit = event => {
        console.log(this.state)
    };
    render() {
        let { client_name, addr_one, addr_two, city, country, state, zipcode, phone, vendor_supplier, description, default_discount_percentage, default_terms } = this.state;

        return (
            <Layout>
                <Fragment>

                    <div className="analytics m-sm-30">
                        <div className="mb-sm-30">
                            <Breadcrumb
                                routeSegments={[
                                    { name: "Clients", path: "/dashboard/home" },
                                    { name: "Create Client" }
                                ]}
                            />
                        </div>
                        <Grid container spacing={3}>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <div className="p-36 h-100">
                                    <h3 className="text-center pb-20">Create new client</h3>
                                    <ValidatorForm ref="form" onSubmit={this.handleFormSubmit}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={6}>
                                                <TextValidator
                                                    className="mb-24 w-100"
                                                    variant="outlined"
                                                    label="Client Name"
                                                    onChange={this.handleChange}
                                                    type="text"
                                                    name="client_name"
                                                    value={client_name}
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
                                                    name="addr_one"
                                                    value={addr_one}
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
                                                    name="addr_two"
                                                    value={addr_two}
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
                                                    validators={["required"]}
                                                    errorMessages={["this field is required"]}
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

                                            <Grid item xs={6}>
                                                <TextValidator
                                                    className="mb-24 w-100"
                                                    variant="outlined"
                                                    label="Vendor Supplier"
                                                    onChange={this.handleChange}
                                                    type="text"
                                                    name="vendor_supplier"
                                                    value={vendor_supplier}
                                                    validators={["required"]}
                                                    errorMessages={["this field is required"]}
                                                />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <TextValidator
                                                    className="mb-24 w-100"
                                                    variant="outlined"
                                                    label="Description"
                                                    onChange={this.handleChange}
                                                    type="text"
                                                    name="description"
                                                    value={description}
                                                    validators={["required"]}
                                                    errorMessages={["this field is required"]}
                                                />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <TextValidator
                                                    className="mb-24 w-100"
                                                    variant="outlined"
                                                    label="Default Discount Percentage"
                                                    onChange={this.handleChange}
                                                    type="number"
                                                    name="default_discount_percentage"
                                                    value={default_discount_percentage}
                                                    validators={['minNumber:0', 'maxNumber:255', 'matchRegexp:^[0-9]$',"required"]}
                                                    errorMessages={["this field is required"]}
                                                    
                                                />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <TextValidator
                                                    className="mb-24 w-100"
                                                    variant="outlined"
                                                    label="Default Terms"
                                                    onChange={this.handleChange}
                                                    type="text"
                                                    name="default_terms"
                                                    value={default_terms}
                                                    validators={["required"]}
                                                    errorMessages={["this field is required"]}
                                                />
                                            </Grid>

                                            <Grid item xs={12}>
                                                <div className="flex flex-middle">
                                                    <Button
                                                        className="capitalize"
                                                        variant="contained"
                                                        color="primary"
                                                        type="submit"
                                                    >
                                                        Create now
                                                    </Button>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </ValidatorForm>
                                </div>
                            </Grid>

                        </Grid>
                    </div>
                </Fragment>
            </Layout>
        );
    }
}

export default withStyles({}, { withTheme: true })(CreateClient);
