import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Home from "../blog/Home";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Articles from "../blog/Articles";
import Licence from "../Licence";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import PrivateRoute from "../PrivateRoute";

class Mynavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar variant="dark" expand="lg" className="#1b5e20 green darken-4">
          <Navbar.Brand href="/">Smartfarm</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/articles">Articles</Nav.Link>
            </Nav>

            <Nav className="">
              {this.props.isAuthenticated ? (
                <Fragment>
                  <Nav.Link onClick={this.props.logout}>logout</Nav.Link>
                </Fragment>
              ) : (
                <Fragment>
                  <Nav.Link href="/register">Register</Nav.Link>
                  <Nav.Link href="/login">Login</Nav.Link>
                </Fragment>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <br />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/articles" component={Articles} />

          <Route path="/licence">
            <Licence />
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mynavbar);
