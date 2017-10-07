import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import logo from "../logo.svg";
import "./App.css";

class DetailedView extends Component {
  render() {
    return (
      <div className="DetailedView">

        <Container>
          <Row>
            <Col><iframe src="URL" height="500" width="900" margin= "auto"/></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default DetailedView;
