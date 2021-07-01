import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import PersistentDrawerLeft from "./components/PersistentDrawerLeft";
import Slider from "./components/Slider";
import Home from "./components/Home";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ce433b",
      main: "#960014",
      dark: "#610000",
      contrastText: "#fff",
    },
    secondary: {
      light: "#4a428b",
      main: "#191b5d",
      dark: "#000033",
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <PersistentDrawerLeft />
        <Slider />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
