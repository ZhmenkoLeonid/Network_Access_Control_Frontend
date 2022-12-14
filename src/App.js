import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Home from "./components/home.component";

import EventBus from "./common/EventBus";
import AuthVerify from "./common/auth-verify";
import NetworkResourcePanel from "./components/panels/network.resource.panel";
import NacRolePanel from "./components/panels/nac.role.panel";
import SecurityUserPanel from "./components/panels/security.user.panel";
import UserDevicePanel from "./components/panels/user.device.panel";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser} = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Admin Panel
          </Link>
          <div className="navbar-nav mr-auto">
{/*            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>*/}

{/*            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}*/}

{/*            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}*/}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/security-user"} className="nav-link">
                  Security Users
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/user-device"} className="nav-link">
                  Users Devices
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/nac-role"} className="nav-link">
                  Nac Roles
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/network-resource"} className="nav-link">
                  Network Resources
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  Logout
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>
{/*
              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>*/}
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/user-device" component={UserDevicePanel} />
            <Route exact path="/nac-role" component={NacRolePanel} />
            <Route exact path="/network-resource" component={NetworkResourcePanel} />
            <Route exact path="/security-user" component={SecurityUserPanel} />
          </Switch>
        </div>

        { <AuthVerify logOut={this.logOut}/>  }
      </div>
    );
  }
}

export default App;
