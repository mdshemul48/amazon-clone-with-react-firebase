import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./app.css"
function App() {
  return (
    // setting react router for multiple page.
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <h1>checkout</h1>
          </Route>
          <Route path="/login">
            <h1>login page</h1>
          </Route>
          <Route path="/">
            <h1>home page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
