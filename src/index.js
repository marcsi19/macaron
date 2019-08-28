import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import createBrowserHistory from "./history";
import App from "./App";
import { Router } from 'react-router-dom'
import * as serviceWorker from "./serviceWorker";
import ScrollToTop from "./scrolltotop";

ReactDOM.render(
  <Router history={createBrowserHistory}>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
