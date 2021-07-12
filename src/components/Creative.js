import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import mining from "../images/mining1.jpg";
import { Typography } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  root: {
    display: "block",
    position: "relative",
    clear: "both",
    width: "100%",
    height: "506px",
    maxHeight: "506px",
    backgroundImage: `url(${mining})`,
    backgroundPositionX: "left 50%",
    backgroundPositionY: "top 40%",
    backgroundSize: "initial",
    backgroundRepeatX: "initial",
    backgroundRepeatY: "initial",
    backgroundAttachment: "fixed",
    backgroundOrigin: "initial",
    backgroundClip: "initial",
    backgroundColor: "initial",
    ["@media (max-width: 1199.98px)"]: {
      backgroundPositionY: "top 100%",
    },
  },
  box: {
    textAlign: "center",
    position: "absolute",
    width: "42%",
    height: "120%",
    background: "#960014",
    display: "block",
    left: "0",
    boxShadow: "0 0px 16px 8px rgb(0 0 0 / 60%), 0 12px 40px 0 rgb(0 0 0 / 30%)",
    bottom: "-10%",
    top: "-10%",
    ["@media (max-width: 1199.98px) "]: {
      paddingTop: "100px",
      paddingBottom: "100px",
    },
    ["@media (max-width: 767.98px) "]: {
      height: "100%",
      width: "100%",
      background: "#960014d1",
      bottom: 0,
      top: 0,
    },
  },
  bottom: {
    display: "block",
    position: "relative",
    clear: "both",
    width: "100%",
    height: "140px",
    maxHeight: "180px",
    background: "#2B2A29",
    zIndex: "-1",
    ["@media (max-width: 1199.98px) "]: {
      height: 100,
    },
    ["@media (max-width: 767.98px) "]: {
      height: 70,
    },
  },
  titleContainer: {
    zIndex: "10",
    position: "relative",
    width: "30%",
    paddingLeft: "8%",
    display: "grid",
    placeItems: "center",
    height: "506px",
    maxHeight: "506px",
    ["@media (max-width: 1199.98px) "]: {
      paddingLeft: "7%",
    },
    ["@media (max-width: 767.98px) "]: {
      width: "100%",
      paddingLeft: 15,
      paddingRight: 15,
    },
  },
  title: {
    color: "#ffffff",
    fontSize: "64px",
    ["@media (max-width: 1199.98px) "]: {
      fontSize: "54px",
    },
    ["@media (max-width: 767.98px) "]: {
      textAlign: "center",
    },
  },
}));

function Creative() {
  const classes = styles();
  return (
    <div>
      <div className={classes.root} role="contentinfo">
        <div className={classes.box}></div>
        <div>
          <div class="views-element-container block block-views block-views-blockslogan-block-1" id="block-views-block-slogan-block-1">
            <div class="content">
              <div>
                <div class="js-view-dom-id-0e4791064776d551e61f085679b8d5396daeafd1fc7ecf27e85b9a462fe66cdf">
                  <div class="views-row">
                    <div className={classes.titleContainer}>
                      <Typography className={classes.title} variant="h1" span>
                        Creative Experienced Tailored
                      </Typography>
                      <span class="field-content"> </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.bottom} role="contentinfo"></div>
    </div>
  );
}

export default Creative;
