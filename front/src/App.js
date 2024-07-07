
import "./App.css";
import Users from "./components/Users";
import Form from "./components/form/Form.tsx";
import Search from './components/Search';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function App() {
  const [users, setUsers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch('/api/users.json')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setSearchResults(data); // 初期値として全ユーザーを表示
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (query) => {
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
    <Router>
      <div className="App">
        <Search query={query} setQuery={setQuery} handleSearch={handleSearch} />
        {/* 
          <Link to="/form">
            <Button variant="primary" className="my-3">Go to Form</Button>
          </Link>
        */}
        <Users users={searchResults} />
        <Routes>
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


