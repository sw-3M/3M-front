import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Global from "./GlobalStyle";
import components from "./component";

function App() {
  return (
    <Router>
      <Global />
      <Switch>
        <Route path="/login" component={components.Login} />
        <Route path="/signup" component={components.Signup} />
        <Route path="/main" component={components.Main} />
        <Route path="/anonymous" component={components.Anonymous} />
        <Route path="/intro" component={components.Intro} />
      </Switch>
    </Router>
  );
}

export default App;
