require('dotenv').config();

const ExpressApp = require('./View/llc-online/src/App');
const db_conn = require('./models/index');

db_conn.connect()

ExpressApp.app.listen(process.env.PORT,process.env.HOSTNAME,function(){ 
    console.log(`Server Running on ${process.env.HOSTNAME}:${process.env.PORT}...`);
});