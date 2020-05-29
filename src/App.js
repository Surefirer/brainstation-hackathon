import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import FarmerPage from "./components/pages/FarmerPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/farmerpage" component={FarmerPage} />
      </Switch>
    </Router>
  );
}

export default App;
