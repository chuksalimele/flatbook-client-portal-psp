import React from "react";
//import { Link } from "react-router-dom";
import PageContent from "views/PageContent/PageContent.js";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// @material-ui/core
//import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
//import Warning from "@material-ui/icons/Warning";
//import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

// core components
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardFooter from "components/Card/CardFooter.js";

import CardBody from "components/Card/CardBody";

import Typography from "@material-ui/core/Typography";

import user from "models/user.js";

import avatar from "assets/img/faces/MY PHOTO.jpg";
//const useStyles = makeStyles(styles);

const MainContent = () => {
  //const classes = useStyles();

  const handleEditProfileClick = () => {
    console.log("handleEditProfileClick");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12}>
        <Card>
          <CardAvatar profile>
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              <img src={avatar} alt="..." />
            </a>
          </CardAvatar>
          <CardBody>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography
                  align="right"
                  variant="subtitle2"
                  style={{ padding: "0" }}
                >
                  Name
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="span">
                  {user.firstName} {user.lastName}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography align="right" variant="subtitle2">
                  Phone
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="span">{user.phoneNumber}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography align="right" variant="subtitle2">
                  Email
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="span">{user.email}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography align="right" variant="subtitle2">
                  Country
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="span">
                  <Typography variant="span">{user.country}</Typography>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography align="right" variant="subtitle2">
                  State/Region
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="span">
                  <Typography variant="span">{user.state}</Typography>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography align="right" variant="subtitle2">
                  City
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="span">
                  <Typography variant="span">{user.city}</Typography>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography align="right" variant="subtitle2">
                  Address
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="span">
                  <Typography variant="span">{user.address}</Typography>
                </Typography>
              </Grid>
            </Grid>
          </CardBody>

          <CardFooter stats>
            <Button
              color="primary"
              href="/client/portal/edit_profile"
              onClick={handleEditProfileClick}
              endIcon={<Icon>edit</Icon>}
            >
              Edit Profile
            </Button>
          </CardFooter>
        </Card>
      </Grid>
    </Grid>
  );
};

export default function PortalProfile() {
  return <PageContent mainContent={<MainContent />} />;
}
