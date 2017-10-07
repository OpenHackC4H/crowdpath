import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import Payload from "../constants/data";

class DetailedView extends Component {
  render() {
    const [iframeURL] = Payload.filter(
      article => article.id === Number(this.props.match.params.id)
    );

    return (
      <div className="DetailedView">
        <Container>
          <Row>
            <Col>
              <iframe
                title="Detailed View"
                src={iframeURL.url}
                height="500"
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
