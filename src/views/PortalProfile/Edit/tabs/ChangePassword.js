import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
//import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

export default function ChangePassword() {
  const [values, setValues] = React.useState({
    old_password: "",
    new_password: "",
    showOldPassword: false,
    showNewPassword: false,
  });

  const handleOldChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleNewChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowOldPassword = () => {
    setValues({ ...values, showOldPassword: !values.showOldPassword });
  };

  const handleClickShowNewPassword = () => {
    setValues({ ...values, showNewPassword: !values.showNewPassword });
  };

  const handleMouseDownOldPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseDownNewPassword = (event) => {
    event.preventDefault();
  };

  const handleForgotPasswordClick = (event) => {
    event.preventDefault();
  };

  const handleChangeMyClick = (event) => {
    event.preventDefault();
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button
          color="secondary"
          variant="outlined"
          onClick={handleForgotPasswordClick}
        >
          I have forgotten my password
        </Button>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel htmlFor="old-password">Old Password</InputLabel>
          <Input
            id="old-password"
            type={values.showOldPassword ? "text" : "password"}
            value={values.old_password}
            onChange={handleOldChange("old_password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowOldPassword}
                  onMouseDown={handleMouseDownOldPassword}
                  edge="end"
                >
                  {values.showOldPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel htmlFor="new-password">New Password</InputLabel>
          <Input
            id="new-password"
            type={values.showNewPassword ? "text" : "password"}
            value={values.new_password}
            onChange={handleNewChange("new_password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowNewPassword}
                  onMouseDown={handleMouseDownNewPassword}
                  edge="end"
                >
                  {values.showNewPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleChangeMyClick}
        >
          Change My Password
        </Button>
      </Grid>
    </Grid>
  );
}
