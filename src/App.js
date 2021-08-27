import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/Layout/About";
import Contact from "./Components/Layout/Contact";
import Navbar from "./Components/Layout/Navbar";
import Users from "./Components/Users/Users";
import NotFound from "./Components/Layout/NotFound";
import UserInfo from "./Components/Users/UserInfo";
import GithubState from "./Context/GithubContext/GithubState";

const App = () => {
  return (
    <Router basename="/githubApp">
      <div>
        <GithubState>
          <Navbar title="Github App " logo="fab fa-github" />
          <div className="container">
            <Switch>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route
                path="/users/:userId"
                render={(props) => <UserInfo {...props} />}
              />
              <Route exact path="/">
                <Users />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </div>
        </GithubState>
      </div>
    </Router>
  );
};

export default App;
