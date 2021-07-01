import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import PersistentDrawerLeft from "./components/PersistentDrawerLeft";
import Slider from "./components/Slider";
import Home from "./components/Home";
import Services from "./components/Services";
import { amber } from "@material-ui/core/colors";
// import "./carousel.css";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      lg: 1205,
    },
  },
  palette: {
    primary: {
      light: "#ce433b",
      main: "#960014",
      dark: "#610000",
      contrastText: "#fff",
    },
    secondary: {
      light: amber[300],
      main: amber[500],
      dark: amber[700],
      contrastText: "#191b5d",
    },
    info: {
      light: "#4a428b",
      main: "#191b5d",
      dark: "#000033",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: ["Lato, sans-serif"],
    h2: {
      fontWeight: 600,
      fontFamily: ["Quicksand, san-sariff"],
      fontSize: "1.75rem",
      lineHeight: "1.75rem",
      marginBottom: "3.125rem",
      marginLeft: "0.9375rem",
    },
    h3: {
      fontWeight: 600,
      fontFamily: ["Quicksand, san-sariff"],
      fontSize: "1.375rem",
      lineHeight: "1.375rem",
      marginBottom: "1.25rem",
      color: "#191b5d",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <PersistentDrawerLeft />
        <Slider />
        <Services />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
