import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import PersistentDrawerLeft from "./components/PersistentDrawerLeft";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme from "./Theme";
import "./App.css";
import Map from "./components/Map";
import Footer from "./components/Footer";
import SubMenu from "./components/SubMenu";

//Pages
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <PersistentDrawerLeft />
          <Switch>
            <Route exact path="/" render={(props) => <Home time="7" {...props} />} />
            <Route exact path="/about" render={(props) => <About time="7" {...props} />} />
          </Switch>
          <Map />
          <SubMenu />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
