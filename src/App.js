import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import components from "./component";

const Global = createGlobalStyle`
body{
  margin:0;
  padding:0;

}`;

function App() {
  return (
    <Router>
      <Global />
      <Switch>
        <Route path="/login" component={components.Login} />
        <Route path="/signup" component={components.Signup} />
      </Switch>
    </Router>
  );
}

export default App;
