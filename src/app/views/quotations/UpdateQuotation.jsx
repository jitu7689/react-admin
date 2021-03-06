import React, { Component, Fragment } from "react";
import {
    Grid
} from "@material-ui/core";

import { Breadcrumb } from "matx";
import { withStyles } from "@material-ui/styles";
import Layout from "../../Layout/Layout1/Layout1";
import QuotationForm from '../../components/quotationform';

class UpdateInvoice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemData:null
        };
    }
    componentDidMount(){
        if(this.props.history.location && this.props.history.location.state){
            if(this.props.history.location.state !== ''){
                this.setState({itemData:this.props.history.location.state})
            }else{
                this.porps.history.push('quotations')
            }
        }
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
                                    { name: "Update Quotation" }
                                ]}
                            />
                        </div>
                        <Grid container spacing={3}>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <div className="p-36 h-100">
                                    <h3 className="text-center pb-20">Update quotation</h3>
                                    {
                                    this.state.itemData && 
                                    <QuotationForm itemData={this.state.itemData} handleFormSubmit={(data) => { this.handleSubmit(data) }}/>
                                    }   
                                </div>
                            </Grid>

                        </Grid>
                    </div>
                </Fragment>
            </Layout>
        );
    }
}

export default withStyles({}, { withTheme: true })(UpdateInvoice);
