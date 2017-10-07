import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import FeedbackBar from "../components/FeedbackBar";
import { connect } from "react-redux";

class DetailedView extends Component {
  render() {
    const { data: { articles } } = this.props;
    const [iframeURL] = articles.filter(
      article => article.id === Number(this.props.match.params.id)
    );

    return (
      <div className="DetailedView">
        <Container>
          <Row>
            <FeedbackBar currentArticle={iframeURL} />
          </Row>
          <Row>
            <Col>
              <iframe
                title="Detailed View"
                src={iframeURL.url}
                height="500"
                width="900"
                style={iframeStyle}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToprops(state) {
  return { data: state.articles };
}
export default connect(mapStateToprops, null)(DetailedView);

const iframeStyle = {
  width: "100%",
  marginTop: "75px"
};
