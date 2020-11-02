import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
  };
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidUpdate = (prevProps) => {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.username) {
        alert.error(`Username: ${error.msg.username.join()}`);
      }
      if (error.msg.email) {
        alert.error(`email: ${error.msg.email.join()}`);
      }
      if (error.msg.password) {
        alert.error(`password: ${error.msg.password.join()}`);
      }
      if (error.msg.message) {
        alert.error(`message: ${error.msg.message.join()}`);
      }
      if (error.msg.non_field_errors) {
        alert.error(`non_field_errors: ${error.msg.non_field_errors.join()}`);
      }
    }

    // messages
    if (message !== prevProps.message) {
      if (message.AccountCreated) {
        alert.success(message.AccountCreated);
      }
      if (message.UsernameBlank) {
        alert.error(message.UsernameBlank);
      }
      if (message.PasswordBlank) {
        alert.error(message.PasswordBlank);
      }
      if (message.EmailBlank) {
        alert.error(message.EmailBlank);
      }
      if (message.PasswordMatch) {
        alert.error(message.PasswordMatch);
      }
      if (message.Login) {
        alert.error(message.Login);
      }
      if (message.CropBlank) {
        alert.error(message.CropBlank);
      }
      if (message.TitleBlank) {
        alert.error(message.TitleBlank);
      }
      if (message.StageBlank) {
        alert.error(message.StageBlank);
      }
      if (message.ContentBlank) {
        alert.error(message.ContentBlank);
      }
      if (message.ArticleAdded) {
        alert.success(message.ArticleAdded);
      }
      if (message.ImageBlank) {
        alert.error(message.ImageBlank);
      }
    }
  };

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.errorReducer,
    message: state.messageReducer,
  };
};

export default connect(mapStateToProps)(withAlert()(Alerts));
