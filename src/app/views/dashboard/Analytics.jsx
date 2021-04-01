import React, { Component, Fragment } from "react";
import {
  Grid,
  Button
} from "@material-ui/core";
import StatCards from "./shared/StatCards";
import { withStyles } from "@material-ui/styles";

class Dashboard1 extends Component {
  state = {};

  render() {
    let { theme } = this.props;

    return (
      <Fragment>

        <div className="analytics m-sm-30">
          <Grid container spacing={3}>
            <Grid item lg={12} md={12} sm={12} xs={12}>

              <StatCards theme={theme}/>
              <Button variant="contained" color="primary" onClick={() => this.props.history.push("/create-client")}> Create New Client </Button>
            </Grid>

          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default withStyles({}, { withTheme: true })(Dashboard1);
