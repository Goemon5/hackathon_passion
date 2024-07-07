import React, { useState, useEffect } from 'react';
import Users from './Users';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Search() {
  const [users, setUsers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    // ローカルAPIからユーザーデータを取得
    fetch('/api/users.json')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const results = users.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase()) || 
      user.email.toLowerCase().includes(query.toLowerCase()) || 
      user.gender.toLowerCase().includes(query.toLowerCase()) || 
      user.fan_history.toLowerCase().includes(query.toLowerCase()) || 
      user.fav_song.toLowerCase().includes(query.toLowerCase()) || 
      user.artist.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="container mt-5">
      <Form onSubmit={handleSearch}>
        <Form.Group controlId="searchQuery">
          <Form.Label>Search Users</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter search term"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>

      {searchResults.length > 0 && <Users users={searchResults} />}
    </div>
  );
}

export default Search;
