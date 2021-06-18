import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// castom components 
import Header from "./Header/page/Header";
import Home from "./Home/pages/Home"
import Login from "./Login/pages/Login";
import Checkout from "./checkout/pages/Checkout";
import "./app.css"
function App() {

  return (
    // setting react router for multiple page.
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
