import React from "react";
import { InputGroup, InputGroupAddon, Input } from "reactstrap";

const SearchBar = props => {
  const style = {
    minWidth: "900px",
    height: "50px",
    margin: "auto"
  };
  return (
    <div>
      <InputGroup style={style}>
        <Input placeholder="What do you need?" />
        <InputGroupAddon>Search</InputGroupAddon>
      </InputGroup>
      <br />
    </div>
  );
};

export default SearchBar;
