import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Home from "../blog/Home";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Arcticles from "../blog/Articles";

class Mynavbar extends React.Component {
  render() {
    return (
      <div>
       
            <Router>
              <Navbar variant="dark" expand="lg" className="#1b5e20 green darken-4" >
                <Navbar.Brand href="/">Smartfarm</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/arcticles">Arcticles</Nav.Link>
                  </Nav>


                  <Nav className="">
                 
                    <Nav.Link href="/register">Register</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                 
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
                <Route path="/arcticles">
                  <Arcticles />
                </Route>
              </Switch>
            </Router>
       
      </div>
    );
  }
}

export default Mynavbar;
