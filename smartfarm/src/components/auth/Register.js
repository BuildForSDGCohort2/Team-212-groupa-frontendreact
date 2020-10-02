import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "username",
      email: "email",
      password: "password",
      passConfirm: "passConfirm",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div>
              <p className="mt-5">
                Would you like to share your journey in farming? How about
                following how the other farmers are doing it? Do not be left
                behind, register with us and get updated on the current farming
                technques.
              </p>
            </div>
            <form className="mt-5 mb-5">
              <legend className="text-success">Join Us Today</legend>
              <div>
                <label htmlFor="usernameReg">Username</label>
              </div>
              <div>
                <input
                  className="form-control"
                  type="text"
                  id="usernameReg"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label htmlFor="emailReg">Email</label>
              </div>
              <div>
                <input
                  className="form-control"
                  type="text"
                  id="emailReg"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label htmlFor="passwordReg">Password</label>
              </div>
              <div>
                <input
                  className="form-control"
                  type="text"
                  id="passwordReg"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label htmlFor="passConfirmReg">Confirm Password</label>
              </div>
              <div>
                <input
                  className="form-control"
                  type="text"
                  id="passConfirmReg"
                  name="passConfirm"
                  value={this.state.passConfirm}
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" className="mt-2">
                Submit
              </button>
              <p className="mt-2">
                Already have an account? <Link to="/login">Login</Link> 
              </p>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    );
  }
}

export default Register;
