import React from 'react'; // import react
import ReactDOM from 'react-dom'; // import reactdom for db routes
import './index.css'; // styling
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./screens/Home.js";
import LoginPage from './screens/loginpage.js';

/*
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/login" element={<LoginPage/>} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
)
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Home />
      <LoginPage />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitals();
