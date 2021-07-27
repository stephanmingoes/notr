import Header from "./Components/header/header.jsx";
import React from "react";
import home from "./Components/home/home.js";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import auth from "./Components/auth/auth.js";

function App() {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {/* <Route path="/" exact component={() => <Redirect to="/tasks" />} /> */}
        <Route path="/" exact component={home} />
        <Route
          path="/auth"
          exact
          component={user ? () => <Redirect to="/" /> : auth}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
