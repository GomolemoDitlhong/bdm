import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import LinkButton from "./LinkedButton";

const height = "370px";
const styles = makeStyles((theme) => ({
  root: {
    backgroundColor: "transparent",
    padding: "15px",
  },
  slideCaption: {
    padding: "25px",
    backgroundColor: theme.palette.secondary.main,
  },
  slideDescription: {
    backgroundColor: theme.palette.common.white,
    padding: "25px",
    position: "relative",
    maxHeight: height,
    height: height,
    display: "block",
    ["@media (max-width:1199.98px)"]: {
      maxHeight: "390px",
      height: "390px",
    },
    ["@media (max-width:1099.98px)"]: {
      maxHeight: "430px",
      height: "430px",
    },
    ["@media (max-width:991.98px)"]: {
      maxHeight: "360px",
      height: "360px",
    },
    ["@media (max-width:767.98px)"]: {
      maxHeight: "430px",
      height: "430px",
    },
    ["@media (max-width:677.98px)"]: {
      height: "auto",
    },
  },
  fieldTitle: {
    textAlign: "center",
  },
  fieldBody: {
    paddingBottom: "70px",
  },
  fieldViewNode: {
    position: "absolute",
    display: "block",
    textAlign: "center",
    bottom: "25px",
    right: "0",
    left: "0",
  },
}));

function Service(props) {
  const classes = styles();
  const { title, children, link } = props;
  return (
    <div className={classes.root}>
      <div className={classes.slideCaption}>
        <div class={classes.slideDescription}>
          <div className={classes.fieldTitle}>
            <Typography variant="h3" color="info">
              {title}
            </Typography>
          </div>
          <div className={classes.fieldBody}>
            <div class="field-content">
              <Typography paragraph>{children}</Typography>
            </div>
            <div className={classes.fieldViewNode}>
              <span class="field-content">
                <LinkButton size="medium" component={link}>
                  Read More
                </LinkButton>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
