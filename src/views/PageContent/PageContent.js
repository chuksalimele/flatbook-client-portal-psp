import React from "react";
// @material-ui/core

import Grid from "@material-ui/core/Grid";

import CommonRightContent from "./CommonRightContent";
import PropTypes from "prop-types";

export default function PageContent(props) {
  const { mainContent, rightContent, noRightContent } = props;

  if (noRightContent) {
    return (
      <Grid container xs={12} sm={12} md={12} spacing={2}>
        <Grid item style={{ width: "100%" }}>
          {mainContent}
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container spacing={2}>
      <Grid container item xs={12} sm={12} md={8} spacing={2}>
        <Grid item style={{ width: "100%" }}>
          {mainContent}
        </Grid>
      </Grid>

      <Grid container item xs={12} sm={12} md={4} spacing={2}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          spacing={2}
          style={{ width: "100%" }}
        >
          {rightContent || <CommonRightContent />}
        </Grid>
      </Grid>
    </Grid>
  );
}

PageContent.propTypes = {
  mainContent: PropTypes.func.Required,
  rightContent: PropTypes.func.Required,
  noRightContent: PropTypes.bool.Required,
};

PageContent.defaultProps = {
  mainContent: <h1>Nothing To Show</h1>,
  rightContent: null,
  noRightContent: false,
};
