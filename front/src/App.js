
import "./App.css";
import Users from "./components/Users";
import Form from "./components/form/Form.tsx";
import Search from './components/Search';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">

      <Users />
      <Form />
     <Search/>
    </div>
  );
}

export default App;
