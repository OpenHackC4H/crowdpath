import React from "react";
import {
  Button,
  ListGroupItemHeading,
  ListGroupItemText,
  Row,
  Col
} from "reactstrap";

const ArticleCard = ({
  props,
  article: { title, url, text, upVotes, downVotes }
}) => {
  return (
    <div>
      <Row>
        <Col>
          <ListGroupItemHeading className="lead">{title}</ListGroupItemHeading>
        </Col>
        <Col>
          <ListGroupItemText>
            <Row>
              <Col>
                <span className="lead" style={upVotesStyle}>
                  {upVotes} ↑
                </span>
              </Col>
              <Col>
                <span className="lead" style={downVotesStyle}>
                  {downVotes} ↓
                </span>
              </Col>
            </Row>
          </ListGroupItemText>
        </Col>
      </Row>
    </div>
  );
};

export default ArticleCard;

const cardStyle = {
  maxWidth: "auto",
  textAlign: "left"
};

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
