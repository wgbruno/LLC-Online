import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from "./components/header"
import Footer from "./components/footer"
import Hero from "./components/header"


function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Hero />

      <Route exact path="/header" element={<Header />} />
      <Route exact path="/footer" element={<Footer />} />
      <Route exact path="/hero" element={<Hero />} />
  </div>
  );
}

export default App;
