import React from "react";
import { ListGroup, ListGroupItem, Row, Col } from "react-bootstrap";
import "./index.css";

const SearchOutput = ({ data, searchTerm }) => { // Receive searchTerm as a prop

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.job_title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ListGroup className="mt-1">
      {filteredData.map((item) => (
        <ListGroupItem key={item.job_title}>
          <Row>
            <Col id="name">{item.name}</Col>
          </Row>
          <Row>
            <Col id="job-title">- {item.job_title}</Col>
          </Row>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default SearchOutput;
