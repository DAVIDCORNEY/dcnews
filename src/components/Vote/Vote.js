import React, { Component } from "react";
import * as api from "../../Api";

class Vote extends Component {
  state = {
    voteChange: 0,
    error: null
  };

  render() {
    const { votes, isLoggedIn } = this.props;
    const { voteChange } = this.state;
    return (
      <>
        <h3>Votes: {votes + voteChange}</h3>
        {isLoggedIn && (
          <div>
            <button
              disabled={voteChange > 0}
              onClick={() => {
                this.handleVote(1);
              }}
            >
              Vote Up
            </button>
            <button
              disabled={voteChange < 0}
              onClick={() => {
                this.handleVote(-1);
              }}
            >
              Vote Down
            </button>
          </div>
        )}
      </>
    );
  }

  handleVote = increment => {
    const { article_id, comment_id } = this.props;
    if (article_id) {
      api.patchArticleVotes(article_id, increment).catch(err => {
        this.setState({ error: err });
      });
      this.setState(prevState => {
        return { voteChange: prevState.voteChange + increment };
      });
    } else {
      api.patchCommentVotes(comment_id, increment).catch(err => {
        this.setState({ error: err });
      });
      this.setState(prevState => {
        return { voteChange: prevState.voteChange + increment };
      });
    }
  };
}

export default Vote;
