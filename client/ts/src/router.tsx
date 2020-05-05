import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home } from './components/Home'

export const RouteManager = () => {

  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/login" component={Login} />
        <Route exact path="/UserPage" component={UserPage} />
        <Route exact path="/LogPage" component={LogPage} /> */}
      </div>
    </Router>
  );
}