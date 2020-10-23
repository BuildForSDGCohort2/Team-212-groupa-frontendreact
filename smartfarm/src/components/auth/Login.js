import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../actions/auth";
import { connect, createStoreHook } from "react-redux";
import { createMessage } from "../../actions/messages";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      hidden: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  toggleShow = () => {
    this.setState({
      hidden: !this.state.hidden,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.username === "") {
      const msg = {
        UsernameBlank: "Username cannot be blank",
      };
      this.props.createMessage(msg);
    } else if (this.state.password === "") {
      const msg = {
        PasswordBlank: "Password cannot be blank",
      };
      this.props.createMessage(msg);
    } else {
      const { username, password } = this.state;
      this.props.login(username, password);
    }
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <form onSubmit={this.handleSubmit} className="mt-5 mb-5">
              <legend className="text-success">Sign In</legend>
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
                <label htmlFor="passwordReg">Password</label>
              </div>
              <div>
                <input
                  className="form-control"
                  type={this.state.hidden? "password":"text"}
                  name="password"
                  id="passwordReg"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>

              <button className="mt-3" type="submit">
                Login
              </button>
              <i
                onClick={this.toggleShow}
                class={
                  this.state.hidden ? "fa fa-eye mx-2" : "fa fa-eye-slash mx-2"
                }
              ></i>
              <p className="mt-2">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
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
    login: (username, password) => dispatch(login(username, password)),
    createMessage: (msg) => dispatch(createMessage(msg)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
