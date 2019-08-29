import React from "react";
import { Route, Switch } from "react-router-dom";
// import './sytle/main.scss';
import Home from "./home";


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
