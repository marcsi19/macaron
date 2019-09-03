import React from "react";
import ReactDOM from "react-dom";
import createBrowserHistory from "./history";
import App from "./App";
import { HashRouter as Router } from 'react-router-dom'
import * as serviceWorker from "./serviceWorker";
import ScrollToTop from "./scrolltotop";
import './style/main.scss';

ReactDOM.render(
  <Router history={createBrowserHistory}>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
