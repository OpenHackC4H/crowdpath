import React from "react";
import { Button, ButtonGroup, Container, Row, Col } from "reactstrap";
import "./FeedbackBar.css";
class FeedbackBar extends React.Component {
  render() {
    return (
      <Container>
        <Button className="up-button" color="success">
          Vote Up
        </Button>{" "}
        <Button className="down-button" color="danger">
          Vote Down
        </Button>{" "}
        <Button className="report-button">Report</Button>
      </Container>
    );
  }
}

export default FeedbackBar;
