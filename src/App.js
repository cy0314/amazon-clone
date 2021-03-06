import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    //BEM block element modifier
    <Router>
      <div className="App">
      <Header />
        <Switch>
          <Router path="/checkout">
            <Checkout />
          </Router>
          <Router path="/">
            <Home />
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
