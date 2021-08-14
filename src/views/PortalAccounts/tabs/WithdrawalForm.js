import React from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";

import currencies from "models/currencies.js";
import accounts from "models/accounts.js";
import paymentMethods from "models/paymentMethods.js";

export default function WithdrawalForm() {
  const [values, setValues] = React.useState({});

  const getAccountCurrenySymbol = (acctNum) => {
    var account = accounts.find((acct) => acct.accountNumber === acctNum);
    if (!account) {
      return "";
    }
    var obj = currencies.find((obj) => obj.value === account.currency);
    return obj ? obj.label : "";
  };

  const handleAccountNumberChange = (evt) => {
    values.accountNumber = evt.target.value;
    setValues(values);
  };

  const handleAmountChange = (evt) => {
    values.amount = evt.target.value;
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
          id="account-number"
          style={{ width: "100%" }}
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

      <Grid item xs={12} sm={6}>
        <FormControl style={{ width: "100%" }}>
          <InputLabel htmlFor="amount">Amount</InputLabel>
          <Input
            id="amount"
            value={values.amount}
            onChange={handleAmountChange}
            startAdornment={
              <InputAdornment position="start">
                {getAccountCurrenySymbol(values.accountNumber)}
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={6}>
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
