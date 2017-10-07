import React from "react";
import { ListGroupItemHeading, ListGroupItemText, Row, Col } from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";

const ArticleCard = ({
  props,
  article: { id, title, url, text, upVotes, downVotes }
}) => {
  const articleURL = `/DetailedView/${id}`;
  return (
    <Row>
      <Col>
        <ListGroupItemHeading className="lead">
          <RRNavLink to={articleURL}>{title}</RRNavLink>
        </ListGroupItemHeading>
      </Col>
      <Col>
        <Row>
          <Col>
            <ListGroupItemText>
              <span className="lead" style={upVotesStyle}>
                {upVotes} ↑
              </span>
            </ListGroupItemText>
          </Col>
          <Col>
            <ListGroupItemText>
              <span className="lead" style={downVotesStyle}>
                {downVotes} ↓
              </span>
            </ListGroupItemText>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ArticleCard;

const votesStyle = {
  margin: "auto",
  float: "right"
};

const upVotesStyle = {
  ...votesStyle,
  color: "green"
};

const downVotesStyle = {
  ...votesStyle,
  color: "red"
};
