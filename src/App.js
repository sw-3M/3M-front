import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Global from "./GlobalStyle";
import components from "./component";

function App() {
  return (
    <Router>
      <Global />
      <Switch>
        <Route path="/intro" component={components.Intro} />
        <Route path='/login' component={components.Login} />
        <Route path='/signup' component={components.Signup} />
        <Route exact path='/' component={components.Main} />
        <Route path='/anonymous' component={components.Anonymous} />
        <Route path='/school:name' component={components.School} />
        <Route path='/club' component={components.Club} />
        <Route path='/QnA' component={components.QnA} />
        <Route path='/fake' component={components.Fake} />
      </Switch>
    </Router>
  );
}

export default App;
