import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Login from './Components/Login/Login';
import Details from './Components/Details/Details';

function App() {
  return (
    <div className="App">
      <main className="content">
        <Router basepath="/">
          <Login path="/" />
          <Details path="/Details" />
        </Router>
      </main>
    </div>
  );
}

export default App;
