import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import PersistentDrawerLeft from "./components/PersistentDrawerLeft";

import Home from "./components/Home";

import theme from "./Theme";
import "./App.css";
import Map from "./components/Map";
import Footer from "./components/Footer";
import SubMenu from "./components/SubMenu";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <PersistentDrawerLeft />
        <Map />
        <SubMenu />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
