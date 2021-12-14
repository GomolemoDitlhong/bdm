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
                      Botswana landscape is bit slower in taking advantages of technology, most parastatals and businesses processes are manual, 
                        and paper based. BDM is a new Generation Technology Company that aim to drive the use of paper down. In this scenario BDM has hungry, 
                          dedicated development teams, Combining business and industry, knowledge with technology, who work closely with clients to produce 
                          comprehensive products.
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
