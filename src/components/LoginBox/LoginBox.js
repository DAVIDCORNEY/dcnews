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
      <form id="loginForm" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">
            Username: Please Login with tickle122 to vote and comment
          </label>
          <input
            type="text"
            required
            id="username"
            name="username"
            onChange={this.handleUserInput}
            value={this.state.userInput}
          />
        </div>
        <div className="button">
          <button type="submit">Login</button>
          {this.state.error ? <UserMessage error={error} /> : null}
        </div>
      </form>
    );
  }
}

export default LoginBox;
