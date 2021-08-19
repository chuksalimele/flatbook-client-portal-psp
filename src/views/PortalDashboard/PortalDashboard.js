import React from "react";
import { Link } from "react-router-dom";
import PageContent from "views/PageContent/PageContent.js";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

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

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import CardBody from "components/Card/CardBody";

import dashboardItems from "models/dashboardItems.js";
const useStyles = makeStyles(styles);

const MainContent = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {dashboardItems.map((item, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Card>
            <CardHeader icon>
              <CardIcon color="info">{item.icon}</CardIcon>
            </CardHeader>
            <CardBody style={{ height: 30 }}>
              <p>{item.text}</p>
            </CardBody>

            <CardFooter stats>
              <Link to={item.url}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  style={{ width: "100%" }}
                  endIcon={<Icon>{item.btnIcon}</Icon>}
                >
                  {item.action}
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default function PortalDashboard() {
  return <PageContent mainContent={<MainContent />} />;
}
