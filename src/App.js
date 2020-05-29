import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import FarmerPage from "./components/pages/FarmerPage";

function App() {
  return (
    <Router>
      <h1>Home page</h1>
      <Switch>
        <Route path="/" exact={true} componet={Home} />
        <Route path="/farmerpage" componet={FarmerPage} />
      </Switch>
    </Router>
  );
}

export default App;
