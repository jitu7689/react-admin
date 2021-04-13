import React, { Component, Fragment } from "react";
import {
    Grid,
    Button,
    Checkbox,
    FormControlLabel,
    IconButton,
    Icon,
} from "@material-ui/core";

import { Breadcrumb } from "matx";
import { withStyles } from "@material-ui/styles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import MenuItem from '@material-ui/core/MenuItem';
import AddIcon from '@material-ui/icons/Add';
import Layout from "../../Layout/Layout1/Layout1";

const companyName = [
    {
      value: 'Jannet Richeson',
      label: 'Jannet Richeson',
    },
    {
      value: 'Valorie Chilcott',
      label: 'Valorie Chilcott',
    },
    {
      value: 'Ressie Brassell',
      label: 'Ressie Brassell',
    },
    {
      value: 'Helene Hoaglin',
      label: 'Helene Hoaglin',
    },
  ];

class AddUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            lineItem: [{
                tenant_name:"Jannet Richeson",
                createQuote: false,
                createInvoice: false,
            }],
            
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

    addMoreItem = () => {
        let addItemArr = this.state.lineItem;
        addItemArr.push({
            tenant_name:"",
            createQuote: false,
            createInvoice: false,
        });
        this.setState({
            lineItem: addItemArr
        });
    }
    removeItem = (data) => {
        let itemArr = this.state.lineItem
        const index = itemArr.indexOf(data);
        if (index > -1) {
            itemArr.splice(index, 1);
        }
        this.setState({
            lineItem: itemArr
        });
    }

    handleChangeArray = (index, event) => {
        let lineItem = [...this.state.lineItem];
        var key = event.target.name;
        lineItem[index][key] = event.target.value;
        this.setState({ lineItem });
    }

    render() {
        let { firstName, lastName,  email, password, lineItem, createQuote, createInvoice } = this.state;

        return (
            <Layout>
                <Fragment>

                    <div className="analytics m-sm-30">
                        <div className="mb-sm-30">
                            <Breadcrumb
                                routeSegments={[
                                    { name: "Administrations", path: "/administrations" },
                                    { name: "Add User" }
                                ]}
                            />
                        </div>
                        <Grid container spacing={3}>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <div className="p-36 h-100">
                                    <h3 className="text-center pb-20">Create new user</h3>
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
                                            {
                                                lineItem.map((item, index) => (
                                            
                                                <Grid item xs={12} key={index} className="disp-inherit">
                                                    <Grid item xs={4}>
                                                        <TextValidator
                                                            className="mb-24 w-100"
                                                            variant="outlined"
                                                            label="Company name"
                                                            onChange={(e) => this.handleChangeArray(index, e)}
                                                            select
                                                            name="tenant_name"
                                                            value={item.tenant_name}
                                                            validators={["required"]}
                                                            errorMessages={["this field is required"]}
                                                        >
                                                        {companyName.map((option) => (
                                                            <MenuItem key={option.value} value={option.label}>
                                                                {option.label}
                                                            </MenuItem>
                                                        ))}    
                                                        </TextValidator>
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <FormControlLabel
                                                            className="mb-16 mrlft-0"
                                                            name="createQuote"
                                                            value={createQuote}
                                                            onChange={this.handleChangeCheckBox}
                                                            control={<Checkbox color="primary" />}
                                                            label="Is create quotation"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={3}>
                                                        <FormControlLabel
                                                            className="mb-16"
                                                            name="createInvoice"
                                                            value={createInvoice}
                                                            onChange={this.handleChangeCheckBox}
                                                            control={<Checkbox color="primary" />}
                                                            label="Is create invoice"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={2}>
                                                        <IconButton onClick={() => this.removeItem(item)}>
                                                            <Icon color="error">close</Icon>
                                                        </IconButton>
                                                    </Grid>
                                                </Grid>
                                            ))
                                            }
                                            <Grid item xs={12}>
                                                <div className="mt-20">
                                                    <Button variant="contained" className="float-right" color="primary" onClick={() => this.addMoreItem()}><AddIcon /> Add more company</Button>
                                                </div>
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

export default withStyles({}, { withTheme: true })(AddUser);