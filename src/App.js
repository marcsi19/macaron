import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
// import "./App.css";

// import Navbar from "./components/navbar";
// import Routes from "./routes";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
