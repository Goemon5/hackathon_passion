
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';

function Search({ query, setQuery, handleSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
  };

  return (
  <div className="fixed-search">
    <div className="container mt-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="searchQuery">
          <Form.Label>Search Users</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter search term"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Form.Group>
      <div className="mt-5">
        <Button variant="primary" type="submit">
          Search
        </Button>
      </div>
      </Form>
        
    </div>
    </div>
  );
}

export default Search;

