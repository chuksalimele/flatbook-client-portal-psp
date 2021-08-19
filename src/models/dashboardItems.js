import React from "react";
import Icon from "@material-ui/core/Icon";

const dashboardItems = [
  {
    action: "Deposit",
    url: "/client/portal/accounts/deposit",
    text: "Instant Deposit",
    subText: "Zero charges",
    icon: <Icon>add_to_queue</Icon>,
    btnIcon: "",
  },
  {
    action: "Withdraw",
    url: "/client/portal/accounts/withdraw",
    text: "Withdrawal may take less than 24 hours",
    subText: "1% charges",
    icon: <Icon>remove_circle_rounded</Icon>,
    btnIcon: "",
  },
  {
    action: "Transfer",
    url: "/client/portal/accounts/transfer",
    text: "Transfer fund to other accounts",
    subText: "Zero charges for internal transfers",
    icon: <Icon>send</Icon>,
    btnIcon: "",
  },
  {
    action: "History",
    url: "/client/portal/accounts/history",
    text: "View your transaction history",
    subText: "",
    icon: <Icon>history_rounded</Icon>,
    btnIcon: "",
  },
  {
    action: "Details",
    url: "/client/portal/accounts/details",
    text: "View your account details",
    subText: "",
    icon: <Icon>details_rounded</Icon>,
    btnIcon: "",
  },
  {
    action: "Eit Profile",
    url: "/client/portal/edit_profile",
    text: "Edit your profile",
    subText: "",
    icon: <Icon>edit</Icon>,
    btnIcon: "",
  },
];

export default dashboardItems;
