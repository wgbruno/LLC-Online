import React from 'react'; // import react
import ReactDOM from 'react-dom'; // import reactdom for db routes
import './index.css'; // styling
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./screens/Home";
import LoginPage from './screens/loginpage';
import Calendar from './screens/Calendar'
import Header_Nav from './components/HeaderNav';
import HeaderGap from './components/HeaderGap';
import Inventory from "./screens/Inventory";
import Notesheet from "./screens/Notesheet";


ReactDOM.render((
    <BrowserRouter>
        <Header_Nav />
        <HeaderGap />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/notesheet" element={<Notesheet />} />
        </Routes>
    </BrowserRouter>
    ), document.getElementById('root')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitals();
