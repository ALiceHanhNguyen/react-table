import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";

const Router = () => (
  <Switch>
    <Route exact path="/" component={ HomePage } />
    <Route exact path="/login" component={ LoginPage } />
  </Switch>
);

export default Router;
