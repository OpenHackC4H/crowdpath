import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import ArticleCard from "./ArticleCard";


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
  marginTop: "40px",
  marginBottom: "75px"
};

const listStyle = {
  display: "block",
  float: "left",
  margin: "auto",
  width: "65%",
  textAlign: "left",
  border: "none"
};
