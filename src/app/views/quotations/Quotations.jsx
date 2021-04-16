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
import VisibilityIcon from '@material-ui/icons/Visibility';
let dummyData = [
  {
    "client":"John Doe",
    "name": "Corporation of HP",
    "terms": "Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham",
    "notes": "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
    "discountPercentage": '0',
    "discountAmount":'0',
    "price": '150',
    "quantity": '3',
    "unit": '10',
    "currency": "$",
    "draft": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    "item":[
      {
        item:'Product 1',
        qty:'2',
        currency:"$",
        rate:'50',
        amount:'100'
      },{
        item:'Product 2',
        qty:'1',
        currency:"$",
        rate:'50',
        amount:'50'
      }
    ]

  },
  {
    "client":"Sam Williams",
    "name": "Upstox",
    "terms": "Printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "notes": "Galley of type and scrambled it to make a type specimen book",
    "discountPercentage": '0',
    "discountAmount":'0',
    "price": '100',
    "quantity": '5',
    "unit": '5',
    "currency": "$",
    "draft": "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English",
    "item":[
      {
        item:'Book 1',
        qty:'3',
        currency:"$",
        rate:'30',
        amount:'90'
      },{
        item:'Book 2',
        qty:'2',
        currency:"$",
        rate:'5',
        amount:'10'
      }
    ]

  },
  {
    "client":"Buck Barns",
    "name": "Invoice For Urban",
    "terms": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    "notes": "When an unknown printer took a galley of type and scrambled it to make a type specimen book",
    "discountPercentage": '0',
    "discountAmount":'0',
    "price": '200',
    "quantity": '5',
    "unit": '5',
    "currency": "$",
    "draft": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    "item":[
      {
        item:'Print 1',
        qty:'3',
        currency:"$",
        rate:'40',
        amount:'120'
      },{
        item:'Print 2',
        qty:'2',
        currency:"$",
        rate:'40',
        amount:'80'
      }
    ]

  },  
  {
    "client":"Maria hill",
    "name": "Samsung Galexy",
    "terms": "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
    "notes": "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text",
    "discountPercentage": '0',
    "discountAmount":'0',
    "price": '100',
    "quantity": '5',
    "unit": '5',
    "currency": "$",
    "draft": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    "item":[
      {
        item:'Book 1',
        quantity:'4',
        currency:"$",
        rate:'20',
        amount:'80'
      },{
        item:'Book 2',
        quantity:'2',
        currency:"$",
        rate:'10',
        amount:'20'
      }
    ]
  },  
]
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
        <Tooltip title="Preview">
          <Button style={{ width: 'auto', margin: 3 }} 
            onClick={() => this.props.history.push({ 
              pathname: '/quotation-view',
              state: data
            })} 
            variant="outlined" size="medium" color="primary"><VisibilityIcon /></Button>
        </Tooltip>
				<Tooltip title="Edit">
				<Button style={{ width: 'auto', margin: 3 }} 
            onClick={() => this.props.history.push({ 
            pathname: '/update-quotation',
            state: data
            })} 
            variant="outlined" size="medium" color="primary"><EditIcon />
          </Button>
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
              <Button variant="contained" color="primary" onClick={() => this.props.history.push("/create-quotation")}>Add new quotation</Button>
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
