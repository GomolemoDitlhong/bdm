import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  bullets: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    height: "44px",
    width: "368px",
    alignContent: "space-between",
    marginBottom: "30px",
    marginLeft: "-80px",
    "& div": {
      height: "8px",
      width: "8px",
      borderRadius: "50%",
      backgroundColor: theme.palette.primary.main,
      marginLeft: "20px",

      "&:nth-child(-n+4), &:nth-child(15), &:nth-child(16), &:nth-child(17), &:nth-child(18)": {
        height: "4px",
        width: "4px",
      },

      "&:nth-child(6), &:nth-child(7), &:nth-child(20), &:nth-child(21)": {
        height: "6px",
        width: "6px",
      },

      "&:nth-child(5), &:nth-child(19)": {
        height: "5px",
        width: "5px",
      },

      "&:nth-child(8), &:nth-child(23)": {
        height: "7px",
        width: "7px",
      },
    },
  },
}));

function Divider(props) {
  const classes = styles();
  return (
    <div className={classes.bullets}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Divider;
