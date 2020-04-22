import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import Login from "./Login";
import QuestionDetail from "./QuestionDetail";
import Leaderboard from "./Leaderboard";
import Nav from "./Nav";
import "../App.css";
import NewerQuestion from "./NewerQuestion";
import ProtectedRoute from "./ProtectedRoute";
import NothingFound from "./NothingFound";
import { Redirect } from "react-router-dom";


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <div className="container">
            <Nav />
            <div className="main-content">
              <Switch>
                <Route path="/" exact component={Login} />
                <ProtectedRoute path="/dashboard" exact component={Dashboard} />
                <ProtectedRoute path="/add" exact component={NewerQuestion} />
                <ProtectedRoute
                  path="/question/:id"
                  component={QuestionDetail}
                />
                <ProtectedRoute path="/leaderboard" component={Leaderboard} />
                <Route path="/not-found" component={NothingFound} />
                <Redirect from='*' to='/not-found' />
              </Switch>
            </div>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);
