import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import ArticleCard from "./ArticleCard";
// Provisional import
// import Payload from "../constants/data";

class ListView extends Component {
  renderListView(payload) {
    if (payload) {
      const articles = payload.map(article => (
        <ListGroupItem key={article.id} style={listStyle}>
          <ArticleCard article={article} />
        </ListGroupItem>
      ));
      return <ListGroup style={ulStyle}>{articles}</ListGroup>;
    } else {
      return null;
    }
  }

  render() {
    const { payload } = this.props;
    return <div>{this.renderListView(payload)}</div>;
  }
}

export default ListView;

const ulStyle = {
  listStyle: "none",
  margin: "auto",
  marginTop: "100px"
};

const listStyle = {
  display: "block",
  float: "left",
  margin: "auto",
  width: "90%",
  textAlign: "left",
  border: "none"
};
