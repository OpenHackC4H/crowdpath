import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import logo from "../logo.svg";
import "./App.css";
import SearchBar from "../components/SearchBar";
import Background from "../components/Background";

import ListView from "../components/ListView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Background />
        <Container className="App-title">
          {/* <h1 className="App-title display-4">Crowd Path</h1> */}
          <SearchBar />
        </Container>
        <p className="App-intro">
          Explore our selected topics - or - search something
        </p>

        <ListView />
      </div>
    );
  }
}

export default App;
