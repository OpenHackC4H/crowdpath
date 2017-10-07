import React, { Component } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./FeedbackBar.css";

import { upVoteArticle, downVoteArticle } from "../actions";

class FeedbackBar extends Component {
  functionToUpVote(id, upVotes) {
    this.props.actions.upVoteArticle(id, upVotes);
  }

  functionToDownVote(id, downVotes) {
    this.props.actions.downVoteArticle(id, downVotes);
  }

  render() {
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
              color="success"
              onClick={this.functionToUpVote.bind(
                this,
                currentId,
                thisArticle.upVotes
              )}
            >
              {thisArticle.upVotes} Vote Up
            </Button>{" "}
            <Button
              className="down-button"
              color="danger"
              style={buttonStyle}
              onClick={this.functionToDownVote.bind(
                this,
                currentId,
                thisArticle.downVotes
              )}
            >
              {thisArticle.downVotes} Vote Down
            </Button>{" "}
            <Button className="report-button">Report</Button>
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
