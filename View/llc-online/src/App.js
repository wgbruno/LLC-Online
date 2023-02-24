import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import home from 'C:/Users/billy/ReactProjects/LLC-Online/View/screens/homes'

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
