import React from "react";
import { makeStyles, Container, Typography } from "@material-ui/core";

// Styles
const styles = makeStyles((theme) => ({
  footer: {
    background: "#2B2A29",
    borderRadius: "0px",
    position: "relative",
    "& a": {
      textDecoration: "none",
      color: "inherit",
      "&:hover": {
        color: "#ff63c9",
      },
    },
  },
  wrapper: {
    gridRow: "2",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "50px",
    paddingBottom: "50px",
    paddingLeft: "30px",
    paddingRight: "30px",
    marginTop: "-2px",
    borderTop: "2px solid #555",
  },
  developer: {
    fontSize: "15px",
    "& :a": {
      fontSize: "15px",
    },
  },
}));

function Footer() {
  const yearNow = new Date().getFullYear();
  const classes = styles();
  return (
    <div className={classes.footer}>
      <Container className={classes.wrapper}>
        <div>
          <Typography variant="body2">Copyright © {yearNow} | All Rights Reserved</Typography>
        </div>
        <div className={classes.developer}>
          Website Design and Developent by
          <a href="https://github.com/GomolemoDitlhong" target="_blank" rel="noreferrer">
            {" "}
            Gomolemo Ditlhong
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
