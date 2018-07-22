import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import SelectPage from "./containers/SelectPage";

const Router = () => (
  <Switch>
    <Route exact path="/" component={ HomePage } />
    <Route exact path="/login" component={ LoginPage } />
    <Route exact path="/select" component={ SelectPage } />
  </Switch>
);

export default Router;
