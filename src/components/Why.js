import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BigButton from "./BigButton";
import { Typography } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  root: {
    display: "block",
    position: "relative",
    clear: "both",
    width: "100%",
    paddingTop: "170px",
    paddingBottom: "170px",
    backgroundColor: "#2B2A29",
    zIndex: "-1",
    paddingLeft: "30px",
    paddingRight: "30px",
    ["@media (max-width:991.98px)"]: {
      paddingTop: "100px",
      paddingBottom: "100px",
    },
  },
  title: {
    color: theme.palette.common.white,
    textAlign: "center",
    marginBottom: "30px",
  },
  subTitleContainer: {
    textAlign: "center",
    color: theme.palette.secondary.main,
    fontSize: "1.575rem",
    marginBottom: "30px",
  },
  titleContainer: {
    position: "relative",
  },
  bodyContainer: {
    textAlign: "center",
  },
}));

function Why() {
  const classes = styles();
  return (
    <div className={classes.root} role="contentinfo">
      <div class="container">
        <div>
          <div className={classes.titleContainer}>
            <Typography className={classes.title} variant="h2">
              Why Big Data Mining?
            </Typography>

            <div class="content">
              <div>
                <div class="js-view-dom-id-a323c57ba109dc75d3bfab12e9c33ecd93479bf40c72307ffd5178bd29af3f3b">
                  <div class="views-row">
                    <div className={classes.subTitleContainer}>
                      <Typography variant="subtitle1" paragraph>
                        Consectetur ading elit, sed do
                      </Typography>
                      <div class="views-field views-field-body">
                        <div className={classes.bodyContainer}>
                          <Typography variant="body2" paragraph>
                            Consectetur ading elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim, quis&nbsp;nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in&nbsp;reprehenderit in voluptate velit
                            esse cillum dolore &nbsp;proident, sunt in culpa…
                          </Typography>
                        </div>
                      </div>
                      <div class="views-field views-field-view-node">
                        <span class="field-content">
                          <BigButton size="large">Read more</BigButton>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
