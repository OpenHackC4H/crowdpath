import React from "react";
import { Card, Button, CardTitle, CardSubtitle, CardText } from "reactstrap";

const ArticleCard = ({
  props,
  article: { title, url, text, upVotes, downVotes }
}) => {
  return (
    <Card style={cardStyle} body>
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>
        <span style={upVotesStyle}>{upVotes} ↑</span> {" "}
        <span style={downVotesStyle}>{downVotes} ↓</span>
      </CardSubtitle>
      <CardText>{text}</CardText>
      <Button color="info" style={buttonStyle}>{url}</Button>
    </Card>
  );
};

export default ArticleCard;

const cardStyle = {
  maxWidth: "auto",
  textAlign: "left"
};

const upVotesStyle = {
  color: "green"
};

const downVotesStyle = {
  color: "red"
};

const buttonStyle = {
  width: "200px",
  margin: "auto"
};
