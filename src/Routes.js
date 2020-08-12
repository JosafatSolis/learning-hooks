import React from "react";
import { Switch, Route } from "react-router-dom";
import CharacterContainer from "./components/CharacterContainer";
import TodoContainer from "./components/TodoContainer";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={TodoContainer} />
    <Route exact path="/rickandmorty" component={CharacterContainer} />
    <Route exact path="/rickandmorty/:id" component={CharacterContainer} />
  </Switch>
);

export default Routes;
