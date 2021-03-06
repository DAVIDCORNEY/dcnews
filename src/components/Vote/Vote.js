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
        <h4>Votes: {votes + voteChange}</h4>
        {isLoggedIn && (
          <div>
            <button
              className="btn btn-primary mr-2 mb-3"
              disabled={voteChange > 0}
              onClick={() => {
                this.handleVote(1);
              }}
            >
              Vote Up
            </button>
            <button
              className="btn btn-primary ml-2 mb-3"
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
