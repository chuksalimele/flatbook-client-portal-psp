import React from "react";
// @material-ui/core

// @material-ui/icons
//import Warning from "@material-ui/icons/Warning";

// core components
//import GridItem from "components/Grid/GridItem.js";
//import GridContainer from "components/Grid/GridContainer.js";
//import Tasks from "components/Tasks/Tasks.js";
import AccountDetails from "./tabs/AccountDetails.js";
import WithdrawalForm from "./tabs/WithdrawalForm.js";
import DepositForm from "./tabs/DepositForm.js";
import TransferForm from "./tabs/TransferForm.js";
import AccountHistory from "./tabs/AccountHistory.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import PageContent from "views/PageContent/PageContent.js";
import user from "models/user.js";
//import { bugs, website, server } from "variables/general.js";

import Grid from "@material-ui/core/Grid";

import {
  Add,
  History,
  Info,
  MoveToInboxTwoTone,
  Remove,
} from "@material-ui/icons";

const AccountNumber = user.SelectedAccountNumber;

function MainContent() {
  return (
    <Grid container item xs={12} sm={12} md={12}>
      <Grid item>
        <CustomTabs
          title={AccountNumber}
          headerColor="primary"
          tabs={[
            {
              tabName: "Details",
              tabIcon: Info,
              tabContent: <AccountDetails />,
            },
            {
              tabName: "Withdraw",
              tabIcon: Remove,
              tabContent: <WithdrawalForm />,
            },
            {
              tabName: "Deposit",
              tabIcon: Add,
              tabContent: <DepositForm />,
            },
            {
              tabName: "Transfer",
              tabIcon: MoveToInboxTwoTone,
              tabContent: <TransferForm />,
            },
            {
              tabName: "History",
              tabIcon: History,
              tabContent: <AccountHistory />,
            },
          ]}
        />
      </Grid>
    </Grid>
  );
}

export default function PortalAccounts() {
  return <PageContent mainContent={<MainContent />} />;
}
