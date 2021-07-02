import React from "react";
import { Button, withStyles } from "@material-ui/core";
const LinkButton = withStyles((theme) => ({
  root: {
    fontSize: "14px",
    lineHeight: "14px",
    color: "#fff",
    display: "inline-block",
    padding: "12px 32px",
    width: "auto",
    borderRadius: "35px",
    textTransform: "capitalize",
    background: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      borderColor: theme.palette.primary.dark,
    },
    "&:active": {
      backgroundColor: theme.palette.primary.dark,
      borderColor: theme.palette.primary.dark,
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
}))(Button);
function LinkedButton(props) {
  const { link, children } = props;
  return (
    <LinkButton size="medium" component={link}>
      {children}
    </LinkButton>
  );
}

export default LinkedButton;
