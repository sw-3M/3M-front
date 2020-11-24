import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import components from "./component";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={components.Login} />
        <Route path="/signup" component={components.Signup} />
      </Switch>
    </Router>
  );
}

export default App;
