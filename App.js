// require('./View/llc-online/src/App.css');
// const Bcrypt = require("bcrypt.js");
const express = require('express');
const accountCont = require('./controller/logic/accountController');
const calendarCont = require('./controller/logic/calendarController');

const app = express();

const accountRouter = require('./controller/routes/accountRoute');
const calendarRouter = require('./controller/routes/calendarRoute');

//app.use('/')

export default App;
