import React, { Component } from "react";
import * as api from "../../Api";

class Vote extends Component {
  state = {
    voteChange: 0
  };

  render() {
    const { votes } = this.props;
    const { voteChange } = this.state;
    return (
      <>
        <h3>Votes: {votes + voteChange}</h3>
        <button
          onClick={() => {
            this.handleVote(1);
          }}
        >
          Vote Up
        </button>
        <button
          onClick={() => {
            this.handleVote(-1);
          }}
        >
          Vote Down
        </button>
      </>
    );
  }

  handleVote = increment => {
    const { article_id, comment_id } = this.props;
    if (article_id) {
      api.patchArticleVotes(article_id, increment).then(article => {
        this.setState(prevState => {
          return { voteChange: prevState.voteChange + increment };
        });
      });
    } else {
      api.patchCommentVotes(comment_id, increment).then(comment => {
        this.setState(prevState => {
          return { voteChange: prevState.voteChange + increment };
        });
      });
    }
  };
}

export default Vote;
