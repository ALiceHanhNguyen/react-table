import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import SelectPage from "./containers/SelectPage";
import RankingToolPage from "./containers/RankingToolPage";

const Router = () => (
  <Switch>
    <Route exact path="/" component={ HomePage } />
    <Route exact path="/login" component={ LoginPage } />
    <Route exact path="/select" component={ SelectPage } />
    <Route exact path="/tool" component={ RankingToolPage } />
  </Switch>
);

export default Router;
