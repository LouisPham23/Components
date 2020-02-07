import React from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Nav from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
