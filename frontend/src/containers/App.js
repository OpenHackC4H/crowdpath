import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import logo from "../logo.svg";
import "./App.css";
import SearchBar from "../components/SearchBar";

import ListView from "../components/ListView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">CrowdPath</h1>
        </header>
        <p className="App-intro">
         Explore our selected topics - or - search something
        </p>
        <Container>
          <Row>
            <Col>
              <SearchBar />
            </Col>
          </Row>
        </Container>
        <ListView />
      </div>
    );
  }
}

export default App;
