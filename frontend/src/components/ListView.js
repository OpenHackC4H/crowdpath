import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import ArticleCard from "./ArticleCard";
// Provisional import
import Payload from "../constants/data";

class ListView extends Component {
  render() {
    const articles = Payload.map(article => (
      <ListGroupItem key={article.id} style={listStyle}>
        <ArticleCard article={article} />
      </ListGroupItem>
    ));
    return <ListGroup style={ulStyle}>{articles}</ListGroup>;
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
  minWidth: "900px",
  margin: "auto",
  textAlign: "left",
  border: "none"
};
