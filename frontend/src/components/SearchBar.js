import React, { Component } from "react";
import { InputGroup, InputGroupButton, Input } from "reactstrap";


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      searchString: ""
    });
    this.props.actions(this.breakString(this.state.searchString));
  };

  handleChange = e => {
    this.setState({
      searchString: e.target.value.toLowerCase()
    });
  };

  breakString(string) {
    return string.split(" ");
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <InputGroup style={style}>
            <Input
              type="text"
              value={this.state.searchString}
              onChange={this.handleChange.bind(this)}
              onKeyDown={e =>
                e.key === "Enter" ? this.handleSubmit.bind(this) : null}
              placeholder="What do you need?"
            />
            <InputGroupButton color="primary">Find it!</InputGroupButton>
          </InputGroup>
        </form>
      </div>
    );
  }
}

export default SearchBar;

const style = {
  maxWidth: "600px",
  margin: "20px auto"
};
