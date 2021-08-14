import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import accounts from "models/accounts.js";
import user from "models/user.js";

export default function AccountDetails() {
  var account = accounts.find(
    (obj) => obj.accountNumber == user.selectedAccountNumber
  );
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Typography align="right" variant="subtitle2" style={{ padding: "0" }}>
          Account number
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="span">{account.accountNumber}</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography align="right" variant="subtitle2">
          Account currency
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="span">{account.currency}</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography align="right" variant="subtitle2">
          Account balance
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="span">{account.balance}</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography align="right" variant="subtitle2">
          Created
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="span">
          {new Date(account.createdAt).toLocaleString()}
        </Typography>
      </Grid>
    </Grid>
  );
}
