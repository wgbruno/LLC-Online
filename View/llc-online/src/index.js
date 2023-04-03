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
import axios from 'axios';

var Airtable = require('airtable');

//create a new Airtable object in React 
new Airtable({apiKey:'pat7LAOx2G8o9KXjo.3b1b1b1b7f1439833170d2fbade502bb0d79d51cd0aec6cc7c33a2b5ca85fd00'}).base('app47HBb7xQ3Vk1uW');
//base endpoint to call with each request
axios.defaults.baseURL =   'https://api.airtable.com/v0/app47HBb7xQ3Vk1uW/map/';
//content type to send with all POST requests 
axios.defaults.headers.post['Content-Type'] = 'application/json';
//authenticate to the base with the API key 
axios.defaults.headers['Authorization'] = 'Bearer pat7LAOx2G8o9KXjo.3b1b1b1b7f1439833170d2fbade502bb0d79d51cd0aec6cc7c33a2b5ca85fd00';
ad3ca9446a89e71fe79f235f49109914f1a6489

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
