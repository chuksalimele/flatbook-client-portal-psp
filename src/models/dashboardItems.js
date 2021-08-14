import React from "react";
import Icon from "@material-ui/core/Icon";

const dashboardItems = [
  {
    action: "Deposit",
    text: "Instant Deposit",
    subText: "Zero charges",
    icon: <Icon>add_to_queue</Icon>,
    btnIcon: "",
  },
  {
    action: "Withdraw",
    text: "Withdrawal may take less than 24 hours",
    subText: "1% charges",
    icon: <Icon>remove_circle_rounded</Icon>,
    btnIcon: "",
  },
  {
    action: "Transfer",
    text: "Transfer fund to other accounts",
    subText: "Zero charges for internal transfers",
    icon: <Icon>send</Icon>,
    btnIcon: "",
  },
  {
    action: "History",
    text: "View your transaction history",
    subText: "",
    icon: <Icon>history_rounded</Icon>,
    btnIcon: "",
  },
  {
    action: "Detail",
    text: "View your account details",
    subText: "",
    icon: <Icon>details_rounded</Icon>,
    btnIcon: "",
  },
  {
    action: "Eit Profile",
    text: "Edit your profile",
    subText: "",
    icon: <Icon>edit</Icon>,
    btnIcon: "",
  },
];

export default dashboardItems;
