import React, { Component } from "react";
import { Container } from "reactstrap";
import "./App.css";
import SearchBar from "../components/SearchBar";
import Background from "../components/Background";
import { connect } from "react-redux";
import { showAllArticles, addTags } from "../actions";
import logo from "../crowdpath.png";

import ListView from "../components/ListView";

class App extends Component {
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { articles: { articles, tags } } = this.props;
    articles.sort((a, b) => b.upVotes - a.upVotes);
    const filteredArrayofArticles =
      tags.length === 1 && tags[0] === ""
        ? articles
        : articles.filter(
            article =>
              article.tags.filter(
                tag => this.props.articles.tags.indexOf(tag) !== -1
              ).length > 0
          );

    console.log(filteredArrayofArticles);
    return (
      <div className="App">
        <Background />
        <Container className="App-title">
          <img src={logo} alt="logo" />
          <SearchBar actions={this.props.addTags} />
          <p className="App-intro">
            Explore our selected topics - or - search something
          </p>
        </Container>
        <ListView payload={filteredArrayofArticles} />
      </div>
    );
  }
}

const ConnectedApp = connect(
  (state, ownProps) => ({
    articles: state.articles
  }),
  {
    onLoad: () => showAllArticles,
    addTags
  }
)(App);

export default ConnectedApp;
