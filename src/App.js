import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home";


const App = () => {
  return (
    <div className="main_screen">
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
