import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

class FeedbackBar extends React.Component {
  render() {
    const style = {
      minWidth: "900px",
      height: "50px",
      margin: "auto",
    };
    return (
      <ButtonGroup>
        <Button>Vote Up</Button>{' '}
        <Button>Vote Down</Button>{' '}
        <Button>Report</Button>
      </ButtonGroup>
    );
  }
}

export default FeedbackBar;
