import React, { Component, Fragment } from "react";
import {
  Grid,
  Button,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Breadcrumb } from "matx";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Layout from "../../Layout/Layout1/Layout1";
import moment from 'moment'; 
import Pdf from "react-to-pdf";
const ref = React.createRef();
class QuotationView extends Component {
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
  ccyFormat = (num) => {
    return `${Number(num).toFixed(2)}`;
  }
  subTotal = (data) => {
    let subTotal = 0
    for(let item of data) { 
        console.log(item.amount)
        subTotal += Number(item.amount); 
    }
    return subTotal;
  }
  totalAmount = (subTotalAmount,discountAmount) => {
      let totalAmount = 0
      totalAmount = Number(subTotalAmount) - Number(discountAmount);
      return totalAmount;
  }
  render() {
    let { itemData } = this.state;

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
            <Pdf targetRef={ref}  filename="code-example.pdf">
              {({ toPdf }) => <Button variant="contained"  color="primary" onClick={toPdf}>Generate Pdf</Button>}
            </Pdf>
            <Grid container  style={{width: '800px',background: 'white',margin:'0 auto'}} spacing={3} ref={ref}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                {
                  itemData &&
                  <div>
                      <h2 className="card-invoice-title">{itemData.name}</h2>
                      <div className="h-100">
                        <Grid justify="space-between" container spacing={3} className="pt-20">
                            <Grid item xs={6}>
                              <h4><b>{itemData.client}</b></h4>
                            </Grid>
                            <Grid item xs={6} >
                              <h6 className="invoice-detail-right">Invoice Number: <b>Inv-0001</b></h6>
                              <h6 className="invoice-detail-right">Invoice Date: <b>{moment().format('DD/MM/YYYY')}</b></h6>
                            </Grid>
                        </Grid>
                        <div className="w-100 mt-40">
                                      <Table style={{ whiteSpace: "pre" }}>
                                          <TableHead>
                                              <TableRow>
                                                  <TableCell  style={{width: '40%'}}><b>Item</b></TableCell>
                                                  <TableCell><b>Quantity</b></TableCell>
                                                  <TableCell><b>Currency</b></TableCell>
                                                  <TableCell><b>Rate</b></TableCell>
                                                  <TableCell align="right"><b>Amount</b></TableCell>
                                              </TableRow>
                                          </TableHead>
                                          <TableBody>
                                              {itemData.item.map((item, index) => (
                                                  <TableRow key={index}>
                                                      <TableCell align="left">
                                                        {item.item}
                                                      </TableCell>
                                                      <TableCell align="left">
                                                        {item.qty}
                                                      </TableCell>
                                                      <TableCell align="left">
                                                        {item.currency}
                                                      </TableCell>
                                                      <TableCell>
                                                        {item.rate}
                                                      </TableCell>
                                                      <TableCell align="right">
                                                          {item.currency}{item.amount}                                                    
                                                      </TableCell>
                                                  </TableRow>
                                              ))}
                                              <TableRow>
                                                <TableCell colSpan={2} rowSpan={3} />
                                                <TableCell colSpan={2}>Subtotal</TableCell>
                                                <TableCell align="right">{itemData.currency}{this.ccyFormat(this.subTotal(itemData.item))}</TableCell>
                                              </TableRow>
                                              <TableRow>
                                                <TableCell>Tax</TableCell>
                                                <TableCell align="left">{`${itemData.discountPercentage} %`}</TableCell>
                                                <TableCell align="right">{this.ccyFormat(itemData.discountAmount)}</TableCell>
                                              </TableRow>
                                              <TableRow>
                                                <TableCell colSpan={2}>Total</TableCell>
                                                <TableCell align="right">{itemData.currency}{this.ccyFormat(this.totalAmount(this.subTotal(itemData.item),itemData.discountAmount))}</TableCell>
                                              </TableRow>
                                          </TableBody>
                                          
                                      </Table>   

                                      <Grid container spacing={3} className="mt-20">
                                          <Grid item xs={8}>
                                              <Grid container spacing={3} className="mt-20">
                                                  <Grid item xs={12}>
                                                      <h6>Notes</h6>
                                                      <p>{itemData.notes}</p>
                                                  </Grid>
                                                  <Grid item xs={12}>
                                                    <h6>Draft</h6>
                                                      <p>{itemData.draft}</p>
                                                  </Grid>
                                                  <Grid item xs={12}>
                                                    <h6>Terms</h6>
                                                      <p>{itemData.terms}</p>
                                                  </Grid>
                                              </Grid>
                                        </Grid>
                                </Grid>
                          </div>
                      </div>                      
                  </div>
                }
               </Grid>
            </Grid>
          </div>
        </Fragment>
      </Layout>
    );
  }
}

export default withStyles({}, { withTheme: true })(QuotationView);
