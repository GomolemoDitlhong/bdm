import React from "react";
import { makeStyles, Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import up from "../images/up.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
const styles = makeStyles((theme) => ({
  subFooter: {
    height: "100%",
    minHeight: 414,
    display: "block",
    position: "relative",
    clear: "both",
    width: "100%",
    background: "#2B2A29",
    paddingTop: "115px",
    paddingBottom: "130px",
    paddingRight: "30px",
    paddingLeft: "30px",
    color: "#FFFFFF",

    "& h2": {
      color: "white",
      fontStyle: "normal !important",
      textAlign: "left",
      paddingBottom: "10px",
      marginBottom: "32px",
      fontStyle: "Quicksand, san-sariff",
      fontSize: "18px",
      fontWeight: "700",
      borderBottom: "3px solid #ffcc00",
      width: "170px",
    },

    "& a": {
      transition: "all 0.5s ease-in-out",
      fontSize: "1rem",
      color: "white",
      paddingBottom: "16px",
      lineHeight: "1",
      textDecoration: "none",
      textAlign: "left",
      zIndex: "201",
      display: "block",
      "&:hover": {
        color: "#ff63c9",
      },
    },
  },
  socialMediaLinks: {
    "& p": {
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right",
      width: "55px",
      height: "55px",
      margin: "0px",
      color: "transparent",
      "&:nth-child(2)": {
        backgroundImage: `url(${twitter})`,
      },
      "&:nth-child(3)": {
        backgroundImage: `url(${instagram})`,
      },
    },
  },
  back: {
    display: "block",
    position: "absolute",
    borderRadius: "50%",
    right: "30px",
    backgroundImage: `url(${up})`,
    backgroundColor: "#960014",
    backgroundPositionX: "center",
    backgroundPositionY: "center",
    backgroundSize: "initial",
    backgroundRepeatX: "no-repeat",
    backgroundRepeatY: "no-repeat",
    top: "120px",
    zIndex: "2",
    padding: "30px",
    maxWidth: "100%",
    boxShadow: "2px 4px 1px #00000075",
  },
}));
function SubMenu() {
  const classes = styles();
  return (
    <div className={classes.subFooter} role="contentinfo">
      <div className={classes.back}></div>
      <Container>
        <div class="demo-grid-ruler mdl-grid">
          <div class="mdl-cell mdl-cell--3-col">
            <div className={classes.socialMediaLinks}>
              <h2>Follow</h2>
              <p>.</p>
              <p>.</p>
            </div>
          </div>
          <div class="mdl-cell mdl-cell-3-col" id="block-views-block-links-block-1">
            <h2>Links</h2>
            <div class="content">
              <div>
                <div class="js-view-dom-id-b5add225b119e05d42af122b6e7b5c62ef7805e5ee0493bebb714098cd8f45bf">
                  <div class="views-row">
                    <div class="views-field views-field-title">
                      <span class="field-content">
                        <Link to="/about" style={{ textDecoration: "none" }}>
                          About
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div class="views-row">
                    <div class="views-field views-field-title">
                      <span class="field-content">
                        <Link to="/whybigdata" style={{ textDecoration: "none" }}>
                          Why Big Data Mining?
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div class="views-row">
                    <div class="views-field views-field-title">
                      <span class="field-content">
                        <Link to="/whybigdata" style={{ textDecoration: "none" }}>
                          What is Big Data Mining?
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mdl-cell mdl-cell-3-col" id="block-views-block-service-links-block-1">
            <h2>Service</h2>

            <div class="content">
              <div>
                <div class="js-view-dom-id-8df7c2cc9c004be5d680540bee3d23d33f3b94fc15fb1f07a9a01cc296627627">
                  <div class="views-row">
                    <div class="views-field views-field-title">
                      <span class="field-content">
                        <Link to="/service1" style={{ textDecoration: "none" }}>
                          Service 1
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div class="views-row">
                    <div class="views-field views-field-title">
                      <span class="field-content">
                        <Link to="/service1" style={{ textDecoration: "none" }}>
                          Service 2
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div class="views-row">
                    <div class="views-field views-field-title">
                      <span class="field-content">
                        <Link to="/service1" style={{ textDecoration: "none" }}>
                          Service 3
                        </Link>
                      </span>
                    </div>
                  </div>
                  <div class="views-row">
                    <div class="views-field views-field-title">
                      <span class="field-content">
                        <Link to="/service4" style={{ textDecoration: "none" }}>
                          Service 4
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="block-contacts" class="mdl-cell mdl-cell-3-col">
            <h2>Contacts</h2>
            <div class="content">
              <div>
                <p>
                  First Floor, Unit 1<br />
                  North Gate Mall
                  <br />
                  Gaborone, Botswana
                </p>

                <p>
                  Cell: +267 76571602
                  <br />
                  Cell: +267 77494385
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SubMenu;
