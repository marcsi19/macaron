import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import createBrowserHistory from "./history";
import App from "./App";
import { HashRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import ScrollToTop from "./scrolltotop";

ReactDOM.render(
  <HashRouter history={createBrowserHistory}>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </HashRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
