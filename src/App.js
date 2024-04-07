import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import SearchInput from "./components/SearchInput";
import SearchOutput from "./components/SearchOutput";

const data = [
  {
    job_title: "Data Scientist",
    name: "Rohit Kavuluri",
  },
  {
    job_title: "Software Developer",
    name: "Sowmya Sri Kancharla",
  },
  {
    job_title: "AI Specialist",
    name: "Priya Singh",
  },
  {
    job_title: "Cybersecurity Specialist",
    name: "Aakash Patel",
  },
  {
    job_title: "Renewable Energy Engineer",
    name: "Rani Kapoor",
  },
  {
    job_title: "Surgeon",
    name: "Dr. Vivek Joshi",
  },
  {
    job_title: "Investment Banker",
    name: "Meena Malhotra",
  },
  {
    job_title: "Chief Executive Officer (CEO)",
    name: "Arjun Desai",
  },
  {
    job_title: "Anesthesiologist",
    name: "Dr. Sunita Patel",
  },
  {
    job_title: "Marketing Manager",
    name: "Amitabh Singh",
  },
];


function App() {
  const [searchTerm, setSearchTerm] = useState(""); // 1. State for searchTerm

  const handleSearchChange = (newSearchTerm) => { // 2. Function to handle changes
    setSearchTerm(newSearchTerm);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={10} lg={6}>
          <h1 id="heading">Search Filtering</h1>
          <SearchInput onSearchChange={handleSearchChange} /> {/* 3. Pass the function as a prop */}
          <SearchOutput data={data} searchTerm={searchTerm} /> {/* 4. Pass searchTerm as a prop */}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
