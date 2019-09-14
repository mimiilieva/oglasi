import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";

// components
import LandingPage from "./components/landing-page";
import Login from "./components/LoginPage/Login";
import AddPost from "./components/user-profile/AddPost";
import Register from "./components/LoginPage/Register";
import OglasiList from "./components/oglasiList";
import Profile from "./components/user-profile/Profile"

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact={true} component={LandingPage} />
        <Route path="/addpost" exact={true} component={AddPost} />

        <Route
          path="/register"
          exact={true}
          render={props => {
            return (
              <div>
                {this.props.auth.token ? <LandingPage /> : <Register />}
              </div>
            );
          }}
        />
        <Route
          path="/login"
          exact={true}
          render={props => {
            return (
              <div>{this.props.auth.token ? <LandingPage /> : <Login />}</div>
            );
          }}
        />
        <Route path="/profile" exact={true} component={Profile}/>
        <Route path="/oglasi" exact={true} component={OglasiList} />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
