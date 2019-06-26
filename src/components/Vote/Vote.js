import React, { Component } from "react";

class Vote extends Component {
  state = {
    voteChange: 0
  };

  render() {
    return (
      <>
        <button>Vote Up</button>
        <button>Vote Down</button>
      </>
    );
  }
}

export default Vote;
