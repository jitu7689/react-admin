import React, { Component, Fragment } from "react";
import {
    Grid
} from "@material-ui/core";

import { Breadcrumb } from "matx";
import { withStyles } from "@material-ui/styles";
import Layout from "../../Layout/Layout1/Layout1";
import QuotationForm from '../../components/quotationform';

class CreateClient extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }
    handleChange = event => {
        event.persist();
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleSubmit = data => {
        console.log(data)
    };
    render() {
        return (
            <Layout>
                <Fragment>

                    <div className="analytics m-sm-30">
                        <div className="mb-sm-30">
                            <Breadcrumb
                                routeSegments={[
                                    { name: "Quotations", path: "/quotations" },
                                    { name: "Create Quotation" }
                                ]}
                            />
                        </div>
                        <Grid container spacing={3}>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <div className="p-36 h-100">
                                    <h3 className="text-center pb-20">Create new quotation</h3>
                                    <QuotationForm handleFormSubmit={(data) => { this.handleSubmit(data) }}/>
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
