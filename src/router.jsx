import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'

const RouteManager = () => {

  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default RouteManager;