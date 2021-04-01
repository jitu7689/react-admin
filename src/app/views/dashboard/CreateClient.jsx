import React, { Component, Fragment } from "react";
import {
    Grid,
    Button,
    Checkbox,
    FormControlLabel
} from "@material-ui/core";

import { Breadcrumb } from "matx";
import { withStyles } from "@material-ui/styles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class CreateClient extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            companyName: "",
            email: "",
            password: "",
            createQuote: false,
            createInvoice: false,
        };
    }
    handleChange = event => {
        event.persist();
        this.setState({
            [event.target.name]: event.target.value
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
        let { firstName, lastName, companyName, email, password, createQuote, createInvoice } = this.state;

        return (
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
                                                name="email"
                                                value={email}
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
                                                name="password"
                                                type="password"
                                                value={password}
                                                validators={["required"]}
                                                errorMessages={["this field is required"]}
                                            />
                                        </Grid>
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
                                        <Grid item xs={12}>
                                            <FormControlLabel
                                                className="mb-16"
                                                name="createQuote"
                                                value={createQuote}
                                                onChange={this.handleChangeCheckBox}
                                                control={<Checkbox color="primary" />}
                                                label="Is create quotation"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControlLabel
                                                className="mb-16"
                                                name="createInvoice"
                                                value={createInvoice}
                                                onChange={this.handleChangeCheckBox}
                                                control={<Checkbox color="primary" />}
                                                label="Is create invoice"
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
        );
    }
}

export default withStyles({}, { withTheme: true })(CreateClient);
