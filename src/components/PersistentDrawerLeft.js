import React, { useContext } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { StateContext } from "../StateContext";

const drawerWidth = 240;

const menuLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Background", link: "/background" },
  { name: "Service 1", link: "/service1" },
  { name: "Service 2", link: "/service2" },
  { name: "Service 3", link: "/service3" },
  { name: "Service 4", link: "/service4" },
];

const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreenclear,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    border: "none",
    backgroundColor: theme.palette.grey[900],
  },
  drawerHeader: {
    display: "flex",
    borderBottom: "3px solid #000",
    alignItems: "center",
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing(1, 2),
    color: theme.palette.grey[300],
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
  },
  toolbar: {
    display: "flex",
    paddingTop: "5px",
    paddingBottom: "5px",
    justifyContent: "space-between",
    borderBottom: "3px white solid",
  },
  heading: {
    flexGrow: 1,
    fontSize: 24,
  },
  listItemText: {
    color: theme.palette.grey[500],
    textDecoration: "none",
  },
  follow: {
    marginBottom: 10,
    marginTop: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 24,
    marginRight: 24,
    borderRight: "2px solid #d3d3d3",
  },
  instagam: {
    height: 31,
    width: 31,
  },
  twitter: {
    marginLeft: 14,
    height: 31,
    width: 31,
  },
}));

function PersistentDrawerLeft() {
  const classes = styles();
  const theme = useTheme();
  const { state = { drawer: false }, dispatch } = useContext(StateContext);

  const handleDrawerOpen = () => {
    dispatch({ type: "DRAWER", drawer: true });
  };
  const handleDrawerClose = () => {
    dispatch({ type: "DRAWER", drawer: false });
  };

  const { drawer } = state;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawer,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, drawer && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.heading} noWrap>
            Big Data Mining
          </Typography>
          <Typography className={classes.follow} color="warning" variant="textSecondary" noWrap>
            Follow
          </Typography>
          <InstagramIcon className={classes.instagam} color="secondary" fontSize="large" />
          <TwitterIcon className={classes.twitter} color="secondary" fontSize="large" />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography variant="h6" noWrap>
            Menu
          </Typography>
          <IconButton onClick={handleDrawerClose}>{theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
        </div>
        <Divider />
        <List>
          {menuLinks.map((page, index) => (
            <ListItem button key={index}>
              <Link to={page.link} className={classes.listItemText}>
                {page.name}
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}

export default PersistentDrawerLeft;
