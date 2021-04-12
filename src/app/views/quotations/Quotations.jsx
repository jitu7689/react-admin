import React, { Component, Fragment } from "react";
import {
  Grid,
  Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Breadcrumb } from "../../../matx";
import GridTable from '@nadavshaar/react-grid-table';
import Layout from "../../Layout/Layout1/Layout1";
import Tooltip from '@material-ui/core/Tooltip';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
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
class Quotations extends Component {
  constructor(props) {
    super(props);
    var columns = [
      { id: 1, field: 'name', label: 'Name', visible: true, sortable: true },
      { id: 2, field: 'terms', label: 'Terms', visible: true, sortable: true },
      { id: 3, field: 'notes', label: 'Notes', visible: true, sortable: true },
      { id: 4, field: 'discount_percentage', label: 'Discount Percentage', visible: true, sortable: true },
      { id: 5, field: 'price', label: 'Price', visible: true, sortable: true },
      { id: 6, field: 'quantity', label: 'Quantity', visible: true, sortable: true },
      { id: 7, field: 'unit', label: 'Unit', visible: true, sortable: true },
      { id: 8, field: 'currency', label: 'Currency', visible: true, sortable: true },
      { id: 9, field: 'draft', label: 'Draft', visible: true, sortable: true },
      { id: 10, field: 'action', label: 'Action', visible: true, sortable: false, cellRenderer: this.actionBtn }
      
    ];
    this.state = {
      cols: columns
    };
  }
  
	actionBtn = ({ tableManager, value, field, data, column, colIndex, rowIndex }) => {
		return (<div className="rgt-cell-inner">
				<Tooltip title="Edit">
					<Button style={{ width: 'auto', margin: 3 }} variant="outlined" size="medium" color="primary"><EditIcon /></Button>
				</Tooltip>
				<Tooltip title="Delete">
					<Button style={{ width: 'auto', margin: 3 }} variant="outlined" size="medium" color="secondary" ><DeleteIcon /></Button>
				</Tooltip>
		</div>);
	}
  render() {

    return (
      <Layout>
        <Fragment>

          <div className="analytics m-sm-30">
            <div className="mb-sm-30">
              <Breadcrumb
                routeSegments={[
                  { name: "Quotations", path: "/quotations" },
                  { name: "Quotations" }
                ]}
              />
            </div>
            <div className="text-align-right mb-20">
              <Button variant="contained" color="primary" onClick={() => this.props.history.push("/create-quotation")}>Create new Quotation</Button>
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
      </Layout>
    );
  }
}

export default withStyles({}, { withTheme: true })(Quotations);
