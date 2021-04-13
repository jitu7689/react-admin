import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { withRouter } from "react-router-dom";
import {
    Grid,
    Button,
    Table,
    TableHead,
    TableCell,
    TableBody,
    IconButton,
    Icon,
    TableRow
} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from "@material-ui/styles";
import TextField from '@material-ui/core/TextField';
import NumberFormat from 'react-number-format';
// const TAX_RATE = 0.07;
const currencies = [
    {
      value: '$',
      label: '$',
    },
    {
      value: '€',
      label: '€',
    },
    {
      value: '฿',
      label: '฿',
    },
    {
      value: '¥',
      label: '¥',
    },
  ];
  let subTotalAmount = 0;
  let discountAmount = 0;
class InvoiceForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            terms: "",
            notes: "",
            discountPercentage: 0,
            draft: "",
            lineItem: [{
                item: "",
                qty: 1,
                currency: "$",
                amount: 0,
                rate: 0
            }],
            subTotal: 0,
            discountAmount: 0
        };
    }
    handleChange = event => {
        event.persist();
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleFormSubmit = event => {
        console.log(this.state)
    };
    addMoreItem = () => {
        let addItemArr = this.state.lineItem;
        addItemArr.push({
            item: "",
            qty: 1,
            currency: "$",
            amount: 0,
            rate: 0
        });
        this.setState({
            lineItem: addItemArr
        });
    }
    removeItem = (data) => {
        let itemArr = this.state.lineItem
        const index = itemArr.indexOf(data);
        if (index > -1) {
            itemArr.splice(index, 1);
        }
        this.setState({
            lineItem: itemArr
        });
    }
    ccyFormat = (num) => {
        return `${num.toFixed(2)}`;
      }
    handleChangeArray = (index, event) => {
        let lineItem = [...this.state.lineItem];
        var key = event.target.name;
        lineItem[index][key] = event.target.value;
        this.setState({ lineItem },()=>{
            console.log('sdfsf', this.state.lineItem)
        });
    }
    handleChangeRateArray = (index, event) => {
        const {value} = event;
        console.log(value)
        let lineItem = [...this.state.lineItem];
        lineItem[index].rate = Number(value);
        lineItem[index].amount = Number(lineItem[index].qty) * Number(lineItem[index].rate);
        console.log(lineItem[index].qty);
        console.log(lineItem[index].rate);
        console.log(lineItem[index].amount);
        this.setState({ lineItem });

    }
    subTotal = () => {
        let subTotal = 0
        for(let item of this.state.lineItem) { 
            subTotal += item.total; 
        }
        subTotalAmount = subTotal;
        return subTotal;
    }
    handleChangeDiscount = (event) => {
        this.setState({ discountPercentage: event.target.value });

        discountAmount = subTotalAmount * event.target.value / 100;
    }
    totalAmount = () => {
        let totalAmount = 0
        // for(let item of this.state.lineItem) { 
        //     totalAmount += item.total; 
        // }
        totalAmount = subTotalAmount - discountAmount;
        return totalAmount;
    }
    handleSubmit = () => {
        this.props.handleFormSubmit(this.state);
    }
    render() {
        const { lineItem } = this.state;
        // console.log(lineItem)
        return (
                <Fragment>
                    <Grid container spacing={3}>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <div className="h-100">
                                <Grid container spacing={3} className="pt-20">
                                    <Grid item xs={5}>
                                        <TextField
                                            label="Name"
                                            variant="outlined"
                                            name="name"
                                            fullWidth
                                            value={this.state.name}
                                            onChange={(e) => this.handleChange(e)}
                                        />
                                    </Grid>
                                </Grid>
                                <div className="w-100 mt-40">
                                    <Table style={{ whiteSpace: "pre" }}>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell  style={{width: '50%'}}>Item</TableCell>
                                                <TableCell>Quantity</TableCell>
                                                <TableCell>Currency</TableCell>
                                                <TableCell>Rate</TableCell>
                                                <TableCell>Amount</TableCell>
                                                {/* <TableCell>Total</TableCell> */}
                                                <TableCell></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {lineItem.map((item, index) => (
                                                <TableRow key={index}>
                                                    <TableCell align="left">
                                                        <TextField
                                                            id="outlined-multiline-static"
                                                            multiline
                                                            rows={1}
                                                            placeholder="Item"
                                                            variant="outlined"
                                                            name="item"
                                                            style={{width: '100%'}}
                                                            value={item.name}
                                                            onChange={(e) => this.handleChangeArray(index, e)}
                                                        />
                                                    </TableCell>
                                                    <TableCell align="left">
                                                        <TextField
                                                            placeholder="Quantity"
                                                            variant="outlined"
                                                            name="qty"
                                                            style={{padding: '10px 14px', width: '100px'}}
                                                            value={item.qty}
                                                            onChange={(e) => this.handleChangeArray(index, e)}
                                                        />
                                                    </TableCell>
                                                    <TableCell align="left">
                                                        {/* {item.currency} */}
                                                        <TextField
                                                            select
                                                            
                                                            placeholder="Select currency"
                                                            name="currency"
                                                            value={item.currency}
                                                            onChange={(e) => this.handleChangeArray(index, e)}
                                                            variant="outlined"
                                                        >
                                                            {currencies.map((option) => (
                                                                <MenuItem key={option.value} value={option.label}>
                                                                    {option.label}
                                                                </MenuItem>
                                                            ))}
                                                        </TextField>
                                                    </TableCell>
                                                    <TableCell>
                                                        <NumberFormat
                                                            className="custom-number-input"
                                                            value={this.state.rate}
                                                            style={{padding: '17px 14px', width: '60px'}}
                                                            name="rate"
                                                            allowNegative={false}
                                                            onValueChange={(e) => this.handleChangeRateArray(index, e)}
                                                        />
                                                    </TableCell>
                                                    {/* <TableCell>
                                                        <NumberFormat
                                                            className="custom-number-input"
                                                            prefix={'$'}
                                                            value={this.state.amount}
                                                            name="amount"
                                                            allowNegative={false}
                                                            style={{padding: '17px 14px'}}
                                                            onValueChange={(e) => this.handleChangeAmountArray(index, e)}
                                                        />
                                                    </TableCell> */}
                                                    <TableCell>
                                                        {item.currency}{item.amount}
                                                        
                                                    </TableCell>
                                                    <TableCell>
                                                        <IconButton onClick={() => this.removeItem(item)}>
                                                            <Icon color="error">close</Icon>
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                    <Grid container spacing={3} className="mt-20">
                                        <Grid item xs={8}>
                                            <div className="mt-20">
                                                <Button variant="contained" color="primary" onClick={() => this.addMoreItem()}><AddIcon /> Add more item</Button>
                                            </div>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Grid container spacing={3} className="mt-20">
                                                <Grid item xs={9}>
                                                    Subtotal
                                                </Grid>
                                                <Grid item xs={3} align="left">
                                                    ${this.subTotal()}
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={3} className="mt-20">
                                                <Grid item xs={3}>
                                                    Discount(%)
                                                </Grid>
                                                <Grid item xs={6} align="left">
                                                    <NumberFormat
                                                        className="custom-number-input"
                                                        value={this.state.discountpercentage}
                                                        style={{padding: '12px 14px', width: '50px', marginTop: '-10px'}}
                                                        name="discountpercentage"
                                                        allowNegative={false}
                                                        onChange={event => this.handleChangeDiscount(event)}
                                                    />
                                                </Grid>
                                                <Grid item xs={3} align="left">
                                                    ${discountAmount}
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={3} className="mt-20">
                                                <Grid item xs={9}>
                                                    Total
                                                </Grid>
                                                <Grid item xs={3} align="left">
                                                    ${this.totalAmount()}
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={3} className="mt-20">
                                        <Grid item xs={6}>
                                            <TextField
                                                label="Notes"
                                                variant="outlined"
                                                name="notes"
                                                fullWidth
                                                multiline
                                                rows={4}
                                                value={this.state.notes}
                                                onChange={(e) => this.handleChange(e)}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                label="Draft"
                                                variant="outlined"
                                                name="draft"
                                                fullWidth
                                                multiline
                                                rows={4}
                                                value={this.state.draft}
                                                onChange={(e) => this.handleChange(e)}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={3} className="mt-20">
                                        <Grid item xs={6}>
                                            <TextField
                                                label="Terms"
                                                variant="outlined"
                                                name="terms"
                                                fullWidth
                                                multiline
                                                rows={4}
                                                value={this.state.terms}
                                                onChange={(e) => this.handleChange(e)}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={3} className="mt-20">
                                        <Grid item xs={12}>
                                            <Button variant="contained" color="primary" onClick={() => this.handleSubmit()}>Submit</Button>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Fragment>
        );
    }
}
InvoiceForm.propTypes = {
    handleFormSubmit: PropTypes.func
};
const mapStateToProps = state => ({
    
});
export default withStyles({}, { withTheme: true })(
withRouter(
    connect(
    mapStateToProps
    )(InvoiceForm)
)
);