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
            iName: "",
            terms: "",
            notes: "",
            discountPercentage: "",
            price: "",
            quantity: "",
            unit: "",
            currency: "",
            draft: ""
        };
    }
    handleChange = event => {
        event.persist();
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleFormSubmit = event => {
        console.log(this.state)
    };
    render() {
        const { iName, terms, notes, discountPercentage, price, quantity, unit, currency, draft } = this.state;

        return (
            <Fragment>

                <div className="analytics m-sm-30">
                    <div className="mb-sm-30">
                        <Breadcrumb
                            routeSegments={[
                                { name: "Invoices", path: "/invoices" },
                                { name: "Create Invoice" }
                            ]}
                        />
                    </div>
                    <Grid container spacing={3}>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <div className="p-36 h-100">
                                <h3 className="text-center pb-20">Create new invoice</h3>
                                <ValidatorForm ref="form" onSubmit={this.handleFormSubmit}>
                                <Grid container spacing={3}>
                                        <Grid item xs={6}>
                                            <TextValidator
                                                className="mb-24 w-100"
                                                variant="outlined"
                                                label="Invoice name"
                                                onChange={this.handleChange}
                                                type="text"
                                                name="iName"
                                                value={iName}
                                                validators={["required"]}
                                                errorMessages={["this field is required"]}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextValidator
                                                className="mb-24 w-100"
                                                variant="outlined"
                                                label="Terms"
                                                onChange={this.handleChange}
                                                type="text"
                                                name="terms"
                                                value={terms}
                                                validators={["required"]}
                                                errorMessages={["this field is required"]}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextValidator
                                                className="mb-24 w-100"
                                                variant="outlined"
                                                label="Notes"
                                                onChange={this.handleChange}
                                                type="text"
                                                name="notes"
                                                value={notes}
                                                validators={["required"]}
                                                errorMessages={["this field is required"]}
                                            />
                                        </Grid>
                                        
                                        <Grid item xs={6}>
                                            <TextValidator
                                                className="mb-24 w-100"
                                                variant="outlined"
                                                label="Discount Percentage"
                                                onChange={this.handleChange}
                                                type="text"
                                                name="discountPercentage"
                                                value={discountPercentage}
                                                validators={["required"]}
                                                errorMessages={[
                                                    "this field is required"
                                                ]}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextValidator
                                                className="mb-16 w-100"
                                                label="Price"
                                                variant="outlined"
                                                onChange={this.handleChange}
                                                name="price"
                                                type="text"
                                                value={price}
                                                validators={["required"]}
                                                errorMessages={["this field is required"]}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextValidator
                                                className="mb-16 w-100"
                                                label="Quantity"
                                                variant="outlined"
                                                onChange={this.handleChange}
                                                name="quantity"
                                                type="text"
                                                value={quantity}
                                                validators={["required"]}
                                                errorMessages={["this field is required"]}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextValidator
                                                className="mb-16 w-100"
                                                label="Unit"
                                                variant="outlined"
                                                onChange={this.handleChange}
                                                name="unit"
                                                type="text"
                                                value={unit}
                                                validators={["required"]}
                                                errorMessages={["this field is required"]}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextValidator
                                                className="mb-16 w-100"
                                                label="Currency"
                                                variant="outlined"
                                                onChange={this.handleChange}
                                                name="currency"
                                                type="text"
                                                value={currency}
                                                validators={["required"]}
                                                errorMessages={["this field is required"]}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextValidator
                                                className="mb-16 w-100"
                                                label="Draft"
                                                variant="outlined"
                                                onChange={this.handleChange}
                                                name="draft"
                                                type="text"
                                                value={draft}
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
        );
    }
}

export default withStyles({}, { withTheme: true })(CreateClient);
