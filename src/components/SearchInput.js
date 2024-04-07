import React from "react";
import { InputGroup, Form, Button } from "react-bootstrap";

const SearchInput = ({ onSearchChange }) => {

  return (
    <div>
      <InputGroup>
        <Form.Control
          placeholder="Search Name"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <Button variant="primary" id="button-addon2">
          <i class="fa-solid fa-magnifying-glass"></i>
        </Button>
      </InputGroup>
    </div>
  )
}

export default SearchInput;
