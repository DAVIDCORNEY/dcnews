import React, { Component } from "react";
import * as api from "../../Api";

class Vote extends Component {
  state = {
    voteChange: 0
  };

  render() {
    const { article_id } = this.props;
    const { votes } = this.props;
    const { voteChange } = this.state;
    return (
      <>
        <h3>Votes: {votes + voteChange}</h3>
        <button
          onClick={() => {
            this.handleVote(article_id, 1);
          }}
        >
          Vote Up
        </button>
        <button
          onClick={() => {
            this.handleVote(article_id, -1);
          }}
        >
          Vote Down
        </button>
      </>
    );
  }

  handleVote = (article_id, increment) => {
    api.patchArticleVotes(article_id, increment).then(article => {
      this.setState(prevState => {
        return { voteChange: prevState.voteChange + increment };
      });
    });
  };
}

export default Vote;
