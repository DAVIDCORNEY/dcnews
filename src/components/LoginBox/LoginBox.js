import React, { Component } from "react";
import * as api from "../../Api";
import UserMessage from "../UserMessage/UserMessage";

class LoginBox extends Component {
  state = {
    userInput: "",
    error: ""
  };

  handleUserInput = event => {
    this.setState({ userInput: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { userInput } = this.state;
    api
      .getUser(userInput)
      .then(user => {
        this.props.getLoggedInUser(user.username);
      })
      .catch(error => {
        this.setState({
          userInput: "",
          error: "Username not found, please enter again"
        });
      });
  };

  render() {
    const error = this.state.error;
    return (
      <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
        <label htmlFor="username">
          Username: Please Login with tickle122 to vote and comment
        </label>
        <input
          className="form-control ml-md-2 ml-lg-2"
          type="text"
          required
          id="username"
          name="username"
          onChange={this.handleUserInput}
          value={this.state.userInput}
        />
        <button className="btn btn-outline-success ml-md-2" type="submit">
          Login
        </button>
        {this.state.error ? <UserMessage error={error} /> : null}
      </form>
    );
  }
}

export default LoginBox;
