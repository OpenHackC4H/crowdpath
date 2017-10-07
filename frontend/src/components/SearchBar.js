import React from "react";
import { InputGroup, InputGroupButton, Input } from "reactstrap";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div>
      <InputGroup>
        <Input placeholder="What do you need?" />
        <InputGroupButton color="primary">Find it!</InputGroupButton>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
