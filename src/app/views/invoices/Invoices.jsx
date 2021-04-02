import React, { Component, Fragment } from "react";
import {
  Grid,
  Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Breadcrumb } from "matx";
import GridTable from '@nadavshaar/react-grid-table';
let dummyData = [{
  "name": "Quotation name",
  "terms": "terms",
  "notes": "notes",
  "discount_percentage": "10",
  "price": "200",
  "quantity": "10",
  "unit": "5",
  "currency": "$",
  "draft": "true"

}]
class Invoices extends Component {
  constructor(props) {
    super(props);
    var columns = [
      { id: 1, field: 'name', label: 'Name', visible: true, sortable: true },
      { id: 2, field: 'terms', label: 'Terms', visible: true, sortable: true },
      { id: 3, field: 'notes', label: 'Notes', visible: true, sortable: true },
      { id: 4, field: 'discount_percentage', label: 'Discount Percentage', visible: true, sortable: true },
      { id: 5, field: 'price', label: 'Price', visible: true, sortable: true },
      { id: 5, field: 'quantity', label: 'Quantity', visible: true, sortable: true },
      { id: 5, field: 'unit', label: 'Unit', visible: true, sortable: true },
      { id: 5, field: 'currency', label: 'Currency', visible: true, sortable: true },
      { id: 5, field: 'draft', label: 'Draft', visible: true, sortable: true }
      
    ];
    this.state = {
      cols: columns
    };
  }

  render() {
    let { theme } = this.props;

    return (
      <Fragment>

        <div className="analytics m-sm-30">
          <div className="mb-sm-30">
            <Breadcrumb
              routeSegments={[
                { name: "Invoices", path: "/invoices" },
                { name: "Invoices" }
              ]}
            />
          </div>
          <div className="text-align-right mb-20">
            <Button variant="contained" color="primary" onClick={() => this.props.history.push("/create-invoice")}>Create new invoice</Button>
          </div>
          <Grid container spacing={3}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <GridTable
                columns={this.state.cols}
                rows={dummyData}
                isPaginated={true}
                isVirtualScroll={true}
                showSearch={true}
                showRowsInformation={false}
                isHeaderSticky={true}
              />
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default withStyles({}, { withTheme: true })(Invoices);
