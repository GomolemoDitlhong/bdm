import React from "react";
import { Button, withStyles } from "@material-ui/core";
const BigBtn = withStyles((theme) => ({
  root: {
    marginTop: "30px",
    marginBottom: "20px",
    display: "inline-block",
    backgroundColor: "#191b5d",
    color: "#ffffff",
    boxShadow: "1px 3px 1px #00000075",
    padding: "17.5px 40px",
    borderRadius: "40px",
    fontSize: "15px",
    lineHeight: "15px",
    width: "auto",
    textTransform: "capitalize",
    background: theme.palette.info.main,
    "&:hover": {
      backgroundColor: theme.palette.info.dark,
      borderColor: theme.palette.info.dark,
    },
    "&:active": {
      backgroundColor: theme.palette.info.dark,
      borderColor: theme.palette.info.dark,
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
}))(Button);

function BigButton(props) {
  const { link, children } = props;
  return (
    <BigBtn size="medium" component={link}>
      {children}
    </BigBtn>
  );
}

export default BigButton;
