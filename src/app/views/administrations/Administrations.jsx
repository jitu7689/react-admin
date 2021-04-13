import React, { Component, Fragment } from "react";
import {
  Grid,
  Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import Layout from "../../Layout/Layout1/Layout1";
import GridTable from '@nadavshaar/react-grid-table';
import Tooltip from '@material-ui/core/Tooltip';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
let dummyData = [{
  "first_name": "John",
  "last_name": "Doe",
  "email": "johndoe@gmail.com",
  "create_quote": 'Yes',
  "create_invoice": 'Yes',
  "tenant_name": "Jannet Richeson"

}]
class Administrations extends Component {
  constructor(props) {
    super(props);
    var columns = [
      { id: 1, field: 'first_name', label: 'First Name', visible: true, sortable: true },
      { id: 2, field: 'last_name', label: 'Last Name', visible: true, sortable: true },
      { id: 3, field: 'email', label: 'Email', visible: true, sortable: true },
      { id: 4, field: 'create_quote', label: 'Create Quote', visible: true, sortable: true },
      { id: 5, field: 'create_invoice', label: 'Create Invoice', visible: true, sortable: true },
      { id: 5, field: 'tenant_name', label: 'Tenant Name', visible: true, sortable: true },
      { id: 6, field: 'status', label: 'Status', visible: true, sortable: false, cellRenderer: this.statusTemp },
      { id: 7, field: 'action', label: 'Action', visible: true, sortable: false, cellRenderer: this.actionBtn }
      
    ];
    this.state = {
      cols: columns
    };
  }
  
	statusTemp = ({ tableManager, value, field, data, column, colIndex, rowIndex }) => {
		return (<div className="rgt-cell-inner">
			<Tooltip title="Admins">
				<Button variant="contained" color="primary" style={{ margin: '5px' }} >Approved</Button>
			</Tooltip>
		</div>);
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
            <Grid container spacing={3}>
              <Grid item lg={12} md={12} sm={12} xs={12}>

                <div align="right">
                <Button variant="contained" color="primary" onClick={() => this.props.history.push("/add-user")}><AddIcon /> Add User </Button>
                </div>
              </Grid>
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

export default withStyles({}, { withTheme: true })(Administrations);
