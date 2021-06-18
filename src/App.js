import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// castom components 
import Header from "./Header/page/Header";
import Home from "./Home/pages/Home"
import Login from "./Login/pages/Login";
import Checkout from "./checkout/pages/Checkout";
import "./app.css"
import { auth } from "./util/firebase";
import userStateValue from "./context/Basket"
function App() {
  const [{ user }, dispatch] = userStateValue()
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in...
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // user is logged out...
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])
  console.log("user", user)
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
