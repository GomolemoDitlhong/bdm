import React from "react";
import Slider from "react-slick";
import CarouselNode from "./CarouselNode";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Divider from "./Divider";

const styles = makeStyles((theme) => ({
  root: {
    display: "block",
    position: "relative",
    clear: "both",
    width: "100%",
    minHeight: "588px",
    paddingTop: "50px",
    paddingBottom: "125px",
    backgroundColor: "#EBECEC",
    paddingLeft: "15px",
    paddingRight: "15px",
  },
  slider: {
    "& button": {
      width: "36px",
      height: "36px",
      "&:before": {
        color: theme.palette.primary.main,
        fontSize: "36px",
        fontSize: "2.25rem",
        opacity: 0.85,
      },
      "&:hover": {
        color: theme.palette.primary.dark,
      },
      "&.slick-prev": {
        "&.slick-arrow": { left: "-50px" },
      },
      "&.slick-next": {
        "&.slick-arrow": { right: "-50px" },
      },
    },
  },
}));

function Carousel() {
  const classes = styles();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Divider />
        <Typography variant="h2">Services</Typography>
        <Slider className={classes.slider} {...settings}>
          <CarouselNode title="Service 1" link="service1">
            Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur.
          </CarouselNode>
          <CarouselNode title="Service 2" link="service2">
            Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur.
          </CarouselNode>
          <CarouselNode title="Service 3" link="service3">
            Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur.
          </CarouselNode>
          <CarouselNode title="Service 4" link="service4">
            Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur.
          </CarouselNode>
        </Slider>
      </Container>
    </div>
  );
}

export default Carousel;
