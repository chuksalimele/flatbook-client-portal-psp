import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
//import Warning from "@material-ui/icons/Warning";

// core components
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import Icon from "@material-ui/core/Icon";

//import user from "models/user.js";
import avatar from "assets/img/faces/MY PHOTO.jpg";

//import Card from "components/Card/Card.js";
//import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
//import CardBody from "components/Card/CardBody.js";
//import CardFooter from "components/Card/CardFooter.js";

const useStyles = makeStyles(styles);

export default function EditBasicProfile() {
  const classes = useStyles();
  const [selectedCountry, setSelectedCountry] = React.useState("");
  const [selectedState, setSelectedState] = React.useState("");
  const [selectedCity, setSelectedCity] = React.useState("");

  const handleChangeCountry = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleChangeState = (event) => {
    setSelectedState(event.target.value);
  };

  const handleChangeCity = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSaveChangesClick = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CardAvatar profile style={{ marginTop: "0px" }}>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <Icon
              style={{
                width: "100%",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              edit
            </Icon>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              defaultValue=""
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              defaultValue=""
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              className={classes.formControl}
              style={{ width: "100%" }}
            >
              <TextField
                label="Email"
                defaultValue=""
                style={{ width: "100%" }}
              />
              <FormHelperText>This will require verification</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              className={classes.formControl}
              style={{ width: "100%" }}
            >
              <TextField
                label="Phone Number"
                defaultValue=""
                style={{ width: "100%" }}
              />
              <FormHelperText>This will require verification</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControl
              className={classes.formControl}
              style={{ width: "100%" }}
            >
              <InputLabel id="select-country-label">Country</InputLabel>
              <Select
                style={{ width: "100%" }}
                labelId="select-country-label"
                id="select-country"
                value={selectedCountry}
                onChange={handleChangeCountry}
                renderValue={(value) => `${value}`}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={"Nigeria"}>Nigeria</MenuItem>
                <MenuItem value={"Ghana"}>Ghane</MenuItem>
                <MenuItem value={"Egypt"}>Egypt</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              className={classes.formControl}
              style={{ width: "100%" }}
            >
              <InputLabel id="select-state-label">State/Region</InputLabel>
              <Select
                style={{ width: "100%" }}
                labelId="select-state-label"
                id="select-state"
                value={selectedState}
                onChange={handleChangeState}
                renderValue={(value) => `${value}`}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={"Delta"}>Delta</MenuItem>
                <MenuItem value={"Lagos"}>Lagos</MenuItem>
                <MenuItem value={"Rivers"}>Rivers</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl
              className={classes.formControl}
              style={{ width: "100%" }}
            >
              <InputLabel id="select-city-label">City</InputLabel>
              <Select
                style={{ width: "100%" }}
                labelId="select-city-label"
                id="select-city"
                value={selectedCity}
                onChange={handleChangeCity}
                renderValue={(value) => `${value}`}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={"Warri"}>Warri</MenuItem>
                <MenuItem value={"Lagos"}>Lagos</MenuItem>
                <MenuItem value={"Asaba"}>Asaba</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              defaultValue=""
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveChangesClick}
            >
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
