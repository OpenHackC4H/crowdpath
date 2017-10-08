import React from "react";
import { ListGroupItemHeading, ListGroupItemText, Row, Col } from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";

const ArticleCard = ({
  props,
  article: { id, title, url, text, upVotes, downVotes, tags }
}) => {
  const articleURL = `/DetailedView/${id}`;

  const tagList = tags.map(
    (tag, i) =>
      i < 5 ? (
        <span key={i}>
          {i === 0 ? "" : ", "}
          {tag}
        </span>
      ) : null
  );
  console.log(tags);
  return (
    <Row>
      <Col>
        <ListGroupItemHeading className="lead">
          <RRNavLink to={articleURL}>{title}</RRNavLink>
        </ListGroupItemHeading>
        <ListGroupItemText style={{ color: "gray" }}>
          tags: {tagList}
        </ListGroupItemText>
      </Col>
      <Col>
        <Row>
          <Col>
            <ListGroupItemText>
              <span className="lead" style={upVotesStyle}>
                {upVotes > 1000
                  ? `${Math.ceil(upVotes / 100) / 10}k`
                  : upVotes}{" "}
                ↑
              </span>
            </ListGroupItemText>
          </Col>
          <Col>
            <ListGroupItemText>
              <span className="lead" style={downVotesStyle}>
                {downVotes > 1000
                  ? `${Math.ceil(downVotes / 100) / 10}k`
                  : downVotes}{" "}
                ↓
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
