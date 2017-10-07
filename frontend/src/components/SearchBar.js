import React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

const SearchBar = (props) => {
  const style={width:"1000px",
    height:"50px",
    }
  return (
    <div>
      <InputGroup style={style}>
        <Input />
        <InputGroupAddon>Search</InputGroupAddon>
      </InputGroup>
      <br />
    </div>
  );
};

export default SearchBar;
