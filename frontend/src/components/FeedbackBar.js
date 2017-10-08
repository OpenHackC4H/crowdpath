import React, { Component } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./FeedbackBar.css";

import { upVoteArticle, downVoteArticle } from "../actions";

class FeedbackBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votedUp: false,
      votedDown: false
    };
  }
  functionToUpVote(id, upVotes) {
    this.setState({ votedUp: true });
    this.props.actions.upVoteArticle(id, upVotes);
  }

  functionToDownVote(id, downVotes) {
    this.setState({ votedDown: true });
    this.props.actions.downVoteArticle(id, downVotes);
  }

  afterVoteMessage() {
    if (this.state.votedDown || this.state.votedUp) {
      return (
        <span className="lead">
          Thanks you for your {this.state.votedUp ? "up" : "down"} vote
        </span>
      );
    } else {
      return null;
    }
  }

  render() {
    const { votedUp, votedDown } = this.state;
    const currentId = this.props.currentArticle.id;
    const [thisArticle] = this.props.articles.filter(
      article => (article.id === currentId ? article : null)
    );
    return (
      <Container style={{ marginTop: "25px", width: "auto" }}>
        <Row>
          <Col xs="12" style={{ textAlign: "center" }}>
            <Button
              style={buttonStyle}
              className="up-button"
              color={votedUp ? "secondary" : "success"}
              onClick={
                votedUp || votedDown
                  ? ""
                  : this.functionToUpVote.bind(
                      this,
                      currentId,
                      thisArticle.upVotes
                    )
              }
            >
              {thisArticle.upVotes} Vote Up
            </Button>{" "}
            <Button
              className="down-button"
              color={votedDown ? "secondary" : "danger"}
              style={buttonStyle}
              onClick={
                votedDown || votedUp
                  ? ""
                  : this.functionToDownVote.bind(
                      this,
                      currentId,
                      thisArticle.downVotes
                    )
              }
            >
              {thisArticle.downVotes} Vote Down
            </Button>{" "}
            <Button color="warning" className="report-button">
              Report
            </Button>
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              textAlign: "center",
              marginTop: "9px"
            }}
          >
            {this.afterVoteMessage()}
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles.articles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        upVoteArticle,
        downVoteArticle
      },
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackBar);

const buttonStyle = {
  width: "150px",
  marginRight: "20px"
};
