import React from "react";
import { InputGroup, InputGroupButton, Input } from "reactstrap";
import "./SearchBar.css";

const SearchBar = props => {
  const style = {
    minWidth: "900px",
    height: "50px",
    margin: "auto",
  };
  return (
    <div>
      <InputGroup>
        <Input />
        <InputGroupButton color="primary">To the Right!</InputGroupButton>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
