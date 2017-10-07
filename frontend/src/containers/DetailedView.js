import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import Payload from "../constants/data";
import FeedbackBar from "../components/FeedbackBar";

import "./DetailedView.css";

class DetailedView extends Component {
  render() {
    const [iframeURL] = Payload.filter(
      article => article.id === Number(this.props.match.params.id)
    );

    return (
      <div className="DetailedView">
        <Container>
          <Row className="feed-back">
            <FeedbackBar article={iframeURL} />
          </Row>
          <Row>
            <Col>
              <iframe
                title="Detailed View"
                src={iframeURL.url}
                height="900"
                width="900"
                margin="auto"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default DetailedView;
