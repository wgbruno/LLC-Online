require('dotenv').config();
const db_conn = require('./models/index.js');

db_conn.connect();

const ExpressApp = require('./App');

ExpressApp.app.listen(process.env.PORT,process.env.HOSTNAME,function(){ 
    console.log(`Server Running on ${process.env.HOSTNAME}:${process.env.PORT}...`);
});