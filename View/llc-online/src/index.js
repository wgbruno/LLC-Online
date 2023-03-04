import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./screens/Home"
import LoginPage from "./screens/loginpage";

/*
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Test/>} />
            <Route path="index.html" element={<Test/>} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
)*/



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Home />
      <Login />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitals();
