import './App.css';

import Users from './components/Users';

import Search from './components/Search';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      {/* 
     <Search/>
     */}
     <Users/>
    </div>
  );
}

export default App;
