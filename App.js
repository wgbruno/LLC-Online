// require('./View/llc-online/src/App.css');
// const Bcrypt = require("bcrypt.js");
const express = require('express');
const cors = require('cors');
const accountController = require('./controller/logic/accountController');

const app = express();

app.use( express.urlencoded( { extended : true } ) );
app.use( express.json( ) );
app.use( cors( ) );

//// Account ////
// Create a new account
app.post("/account", accountController.createAccount);
// Get an account by ID
app.get("/account/:id", accountController.getAccount);
// Update an account by ID
app.put("account/:id", accountController.updateAccount);
// Delete an account by ID
app.delete("account/:id", accountController.deleteAccount);
// Log in to an existing account
app.post('/login', accountController.login);
// Get admins by ID
app.get("/account/admin/:id", accountController.getAdmins);
// Get staff by ID
app.get("/account/staff:id", accountController.getStaff);
// Get student by ID
app.get("/account/:id", accountController.getStudents);

exports.app = app;