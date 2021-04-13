import React, { Component, Fragment } from "react";
import {
  Grid,
  Button
} from "@material-ui/core";
import StatCards from "./shared/StatCards";
import { withStyles } from "@material-ui/styles";
import Layout from "../../Layout/Layout1/Layout1";
import GridTable from '@nadavshaar/react-grid-table';
import Tooltip from '@material-ui/core/Tooltip';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
let dummyData = [
  {
    'client_name'                 : "John Doe",
    'addr_one'                    : "4 Kendi St, The Gap, QLD 4061",
    'addr_two'                    : "387 Riverroy Rd, Kingaroy, QLD 4610",
    'country'                     : "United States",
    'state'                       : "Indiana",
    'city'                        : "Alexandria",
    'zipcode'                     : "3071",
    'phone'                       : "+1 (041) 330-9415",
    'vendor_supplier'             : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    'description'                 : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    'default_discount_percentage' : "10%",
    'default_terms'               : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

  },
  {
    'client_name'                 : "John Doe",
    'addr_one'                    : "4 Kendi St, The Gap, QLD 4061",
    'addr_two'                    : "387 Riverroy Rd, Kingaroy, QLD 4610",
    'country'                     : "United States",
    'state'                       : "Indiana",
    'city'                        : "Alexandria",
    'zipcode'                     : "3071",
    'phone'                       : "+1 (041) 330-9415",
    'vendor_supplier'             : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    'description'                 : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    'default_discount_percentage' : "10%",
    'default_terms'               : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

  },
  {
    'client_name'                 : "John Doe",
    'addr_one'                    : "4 Kendi St, The Gap, QLD 4061",
    'addr_two'                    : "387 Riverroy Rd, Kingaroy, QLD 4610",
    'country'                     : "United States",
    'state'                       : "Indiana",
    'city'                        : "Alexandria",
    'zipcode'                     : "3071",
    'phone'                       : "+1 (041) 330-9415",
    'vendor_supplier'             : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    'description'                 : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    'default_discount_percentage' : "10%",
    'default_terms'               : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

  }
]
class Dashboard1 extends Component {
  constructor(props) {
    super(props);
    var columns = [
      { id: 1, field: 'client_name', label: 'Client Name', visible: true, sortable: true },
      { id: 2, field: 'addr_one', label: 'Address 1', visible: true, sortable: true },
      { id: 3, field: 'addr_two', label: 'Address 2', visible: true, sortable: true },
      { id: 4, field: 'country', label: 'Country', visible: true, sortable: true },
      { id: 5, field: 'state', label: 'State', visible: true, sortable: true },
      { id: 6, field: 'city', label: 'City', visible: true, sortable: true },
      { id: 7, field: 'zipcode', label: 'Zip Code', visible: true, sortable: true },
      { id: 8, field: 'phone', label: 'Phone number', visible: true, sortable: true },
      { id: 9, field: 'vendor_supplier', label: 'Vendor Supplier', visible: true, sortable: true },
      { id: 10, field: 'description', label: 'Description', visible: true, sortable: true },
      { id: 11, field: 'default_discount_percentage', label: 'Default Discount Percentage', visible: true, sortable: true },
      { id: 12, field: 'default_terms', label: 'Default Terms', visible: true, sortable: true },

      // { id: 6, field: 'status', label: 'Status', visible: true, sortable: false, cellRenderer: this.statusTemp },
      { id: 13, field: 'action', label: 'Action', visible: true, sortable: false, cellRenderer: this.actionBtn }
      
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
    let { theme } = this.props;

    return (
      <Layout>
        <Fragment>

          <div className="analytics m-sm-30">
            <Grid container spacing={3}>
              <Grid item lg={12} md={12} sm={12} xs={12}>

                <StatCards theme={theme}/>
                <div align="right">
                <Button variant="contained" color="primary" onClick={() => this.props.history.push("/create-client")}> Create New Client </Button>
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

export default withStyles({}, { withTheme: true })(Dashboard1);
