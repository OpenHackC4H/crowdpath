import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import FeedbackBar from "../components/FeedbackBar";
import { connect } from "react-redux";
import Footer from "../components/Footer";

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
                height="900"
                width="900"
                style={iframeStyle}
              />
            </Col>
          </Row>
        </Container>
        <Footer />
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
