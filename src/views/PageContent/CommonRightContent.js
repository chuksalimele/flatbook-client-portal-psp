import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
//import Warning from "@material-ui/icons/Warning";

// core components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";
import CardBody from "components/Card/CardBody.js";
//import InputLabel from "@material-ui/core/InputLabel";
//import MenuItem from "@material-ui/core/MenuItem";
//import FormHelperText from "@material-ui/core/FormHelperText";
//import FormControl from "@material-ui/core/FormControl";
//import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { InfoRounded } from "@material-ui/icons";
import Success from "components/Typography/Success";

const useStyles = makeStyles(styles);
const AccountBalance = "36,000";
const AccountCurrency = "USD";
const CustomerID = "2873739";
const LastWithdrawalOrDepositDateTime = "Last Deposit: 4th June 2021 13:23";
const AccountCreatedDateTime = "Created: 23rd August 2018";

const itemStyle = {
  width: "100%",
};

export default function CommonRightContent() {
  const classes = useStyles();
  //const [selectedAccount, setSelectedAccount] = React.useState("");

  /*const handleChangeAccount = (event) => {
    setSelectedAccount(event.target.value);
  };
*/
  return (
    <Grid container item spacing={2}>
      <Grid item spacing={2} style={itemStyle}>
        <Card>
          <CardHeader color="success">
            <h4 style={{ margin: 0 }}>
              ID: <span>{CustomerID}</span>
            </h4>
          </CardHeader>
          <CardBody style={{ paddingTop: "10px", paddingBottom: 0 }}>
            <h3 className={classes.cardTitle}>
              <small>{AccountCurrency}</small>
            </h3>
          </CardBody>
          <CardFooter stats>
            <div className={classes.stats}>
              <Success>
                <InfoRounded />
              </Success>
              <p>{AccountCreatedDateTime}</p>
            </div>
          </CardFooter>
        </Card>
      </Grid>
      <Grid item spacing={2} style={itemStyle}>
        <Card>
          <CardHeader icon>
            <CardIcon color="info">
              <Icon>account_balance</Icon>
            </CardIcon>
            <p className={classes.cardCategory}>Account Balance</p>
            <h3 className={classes.cardTitle}>
              {AccountBalance} <small>{AccountCurrency}</small>
            </h3>
          </CardHeader>
          <CardFooter stats>
            <div className={classes.stats}>
              <Success>
                <InfoRounded />
              </Success>
              <p>{LastWithdrawalOrDepositDateTime}</p>
            </div>
          </CardFooter>
        </Card>
      </Grid>
    </Grid>
  );
}
