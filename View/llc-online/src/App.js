const express = require('express'); 
const bp = require('body-parser');
const morgan = require('morgan'); 
const session = require('express-session');
const cors = require('cors');
const memorystore = require('memorystore')(session);
const accountRoute = require('../../../controller/routes/accountRoute');

const app = express(); 

app.use(morgan('dev')); 
app.use(bp.urlencoded({extended:true}));
app.use(bp.json());
app.use(cors());

app.use(session({
    secret: 'billiard',
    cookie: {maxAge: 86400000 }, 
    store: new memorystore({ checkPeriod: 86400000 }),
    resave: false,
    saveUninitialized: true
}));

// routes
app.use("/account", accountRoute);

app.use(function(req, res, next) {
    next(createError(404));
});

exports.app = app;