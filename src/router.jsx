import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home.jsx'
import AuthContext from './AuthContext.jsx'

const RouteManager = () => {

  const authState = useContext(AuthContext)
  console.log(authState.name)

  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default RouteManager;