import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
// import FarmerPage from "./components/pages/FarmerBio";
import FarmerBio from "./components/pages/FarmerBio";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/farmerbio" component={FarmerBio} />
      </Switch>
    </Router>
  );
}

export default App;
