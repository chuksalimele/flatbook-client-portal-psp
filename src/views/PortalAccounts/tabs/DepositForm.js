import React from "react";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

import accounts from "models/accounts.js";
import paymentMethods from "models/paymentMethods.js";

export default function DepositForm() {
  const [values, setValues] = React.useState({});

  const handleAccountNumberChange = (evt) => {
    values.accountNumber = evt.target.value;
    setValues(values);
  };

  const handleMethodNameChange = (evt) => {
    values.methodName = evt.target.value;
    setValues(values);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          style={{ width: "100%" }}
          id="account-number"
          select
          label="Account Number"
          value={values.accountNumber}
          onChange={handleAccountNumberChange}
          helperText="Please select your account"
        >
          {accounts.map((account) => (
            <MenuItem key={account.accountNumber} value={account.accountNumber}>
              {account.accountNumber}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid item>
        <TextField
          style={{ width: "100%" }}
          id="method"
          select
          label="Method"
          value={values.methodName}
          onChange={handleMethodNameChange}
          helperText="Method by which you funded your account"
        >
          {paymentMethods.map((method) => (
            <MenuItem key={method.name} value={method.name}>
              {method.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </Grid>
  );
}
