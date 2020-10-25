import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { register } from "../../actions/auth";
import { connect } from "react-redux";
import { createMessage } from "../../actions/messages";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      passConfirm: "",
      hidden: true,
      accountCreated: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.username === "") {
      const msg = {
        UsernameBlank: "Username cannot be blank",
      };
      this.props.createMessage(msg);
    } else if (this.state.email === "") {
      const msg = {
        EmailBlank: "Email cannot be blank",
      };
      this.props.createMessage(msg);
    } else if (this.state.password === "" || this.state.passConfirm === "") {
      const msg = {
        PasswordBlank: "Password cannot be blank",
      };
      this.props.createMessage(msg);
    } else if (this.state.password !== this.state.passConfirm) {
      const msg = {
        PasswordMatch: "Passwords do not match",
      };
      this.props.createMessage(msg);
    } else {
      const { username, email, password } = this.state;
      this.props.register(username, email, password);
      this.setState({
        accountCreated: true,
      });
    }
  };

  toggleShow = () => {
    this.setState({
      hidden: !this.state.hidden,
    });
  };
  render() {
    if (this.state.accountCreated) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="container-fluid registerApp">
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
            <form onSubmit={this.handleSubmit} className="mt-5 mb-5">
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
                  type={this.state.hidden ? "password" : "text"}
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
                  type={this.state.hidden ? "password" : "text"}
                  id="passConfirmReg"
                  name="passConfirm"
                  value={this.state.passConfirm}
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" className="mt-2">
                Submit
              </button>
              <i
                onClick={this.toggleShow}
                className={
                  this.state.hidden ? "fa fa-eye mx-2" : "fa fa-eye-slash mx-2"
                }
              ></i>

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

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (username, email, password) =>
      dispatch(register(username, email, password)),
    createMessage: (msg) => dispatch(createMessage(msg)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
