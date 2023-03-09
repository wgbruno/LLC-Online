// require('./View/llc-online/src/App.css');
// const Bcrypt = require("bcrypt.js");
const express = require('express');
const cors = require('cors');
const accountRouter = require('./controller/routes/accountRoute');
// const calendarRouter = require('./controller/routes/calendarRoute');

const app = express();

app.use( express.urlencoded( { extended : true } ) );
app.use( express.json( ) );
app.use( cors( ) );

// controller routing
app.use( '/account', accountRouter );
// app.use( '/calendar', calendarRouter );

module.exports = app;
