import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./StateContext";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
