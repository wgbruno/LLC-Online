import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import home from './screens/home';

function App() {
  return (
    <div className="wrapper">

      <Router>

        <Routes>

          <Route path="/" element={home} />

        </Routes>

      </Router>

    </div>
  );
}

export default App;
