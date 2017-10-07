import React, { Component } from "react";
import { InputGroup, InputGroupButton, Input } from "reactstrap";
import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ""
    };
  }

  onInputChange(searchString) {
    this.setState({searchString});
  }

  render() {
    return (
      <div>
        <InputGroup>
          <Input
            type="text"
            value={this.state.searchString}
            onChange={e => this.onInputChange(e.target.value)}
            placeholder="What do you need?"
          />
          <InputGroupButton color="primary">Find it!</InputGroupButton>
        </InputGroup>
      </div>
    );
  }
}

export default SearchBar;
