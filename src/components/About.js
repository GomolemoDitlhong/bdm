import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import about from "../images/about2.png";
import Image from "material-ui-image";
import Divider from "./Divider";
import { Container, Typography } from "@material-ui/core";
import LinkedButton from "./LinkedButton";
import Grid from "@material-ui/core/Grid";
const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "block",
    position: "relative",
    clear: "both",
    width: "100%",
    height: "auto",
    paddingTop: "50px",
    paddingLeft: "30px",
    paddingRight: "30px",
    backgroundColor: "#EBECEC",
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  about: {
    paddingTop: "150px",
  },
  illustration: {
    paddingTop: "60px",
    paddingLeft: "30px",
    paddingRight: "30px",
    alignContent: "center",
    display: "grid",
    backgroundColor: "transparent",
  },
}));

function About() {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Divider />
        <div className={classes.wrapper}>
          <Grid container spacing={3}>
            <Grid item xs={6} lg={7}>
              <div className={classes.about}>
                <div class="views-field views-field-title">
                  <Typography color="" variant="h2">
                    About
                  </Typography>
                </div>
                <div class="views-field views-field-body">
                  <div class="field-content">
                    <Typography variant="body1" paragraph>
                      Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur.
                    </Typography>
                  </div>
                </div>
                <div class="views-field views-field-view-node">
                  <span class="field-content">
                    <LinkedButton size="medium">Read More</LinkedButton>
                  </span>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} lg={5}>
              <div className={classes.illustration}>
                <Image src={about} style={{ backgroundColor: "transparent" }} />
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default About;
