import React, { Component, Fragment } from "react";
import {
    Grid
} from "@material-ui/core";
import { Breadcrumb } from "matx";
import { withStyles } from "@material-ui/styles";
import Layout from "../../Layout/Layout1/Layout1";
// import Pdf from "react-to-pdf";
import InvoiceForm from '../../components/invoiceform';
const ref = React.createRef();
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
                this.porps.history.push('invoices')
            }
        }
    }
    handleSubmit = (data) => {
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
                                    { name: "Invoices", path: "/invoices" },
                                    { name: "Update Invoice" }
                                ]}
                            />
                        </div>
                        <Grid container spacing={3}>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <div className="p-36 h-100">
                                    <h3 className="text-center pb-20">Update invoice</h3>
                                    {/* <Pdf targetRef={ref} filename="code-example.pdf">
                                        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                                    </Pdf> */}
                                    {
                                        this.state.itemData && 
                                        <InvoiceForm itemData={this.state.itemData} handleFormSubmit={(data) => { this.handleSubmit(data) }}/>
                                    }
                                    
                                    <div ref={ref}>
                                    </div>
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
