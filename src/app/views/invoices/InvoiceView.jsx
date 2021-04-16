import React, { Component, Fragment } from "react";
import {
  Grid,
  Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Breadcrumb } from "matx";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Layout from "../../Layout/Layout1/Layout1";
import PDFViewer from 'pdf-viewer-reactjs';
import Inv from './../../../img/INV.pdf'; 
class InvoiceView extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    // let { theme } = this.props;

    return (
      <Layout>
        <Fragment>

          <div className="analytics m-sm-30">
            <div className="mb-sm-30">
              <Breadcrumb
                routeSegments={[
                  { name: "Invoices", path: "/invoices" },
                  { name: "Invoice View" }
                ]}
              />
            </div>
            <div className="text-align-left mb-20">
              <Button variant="contained" color="primary" onClick={() => this.props.history.push("/invoices")}><ArrowBackIcon /></Button>
            </div>
            <Grid container spacing={3}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
								<PDFViewer
										document={{
												url: Inv,
										}}
								/>
              </Grid>
            </Grid>
          </div>
        </Fragment>
      </Layout>
    );
  }
}

export default withStyles({}, { withTheme: true })(InvoiceView);
