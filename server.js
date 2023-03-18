require('dotenv').config();

const ExpressApp = require('./App');
const db_conn = require('./models/index');

db_conn.connect()

ExpressApp.app.listen(/*process.env.PORT*/4000,/*process.env.HOSTNAME*/"localhost",function(){ 
    console.log(`Server Running on ${/*process.env.HOSTNAME*/"localhost"}:${/*process.env.PORT*/4000}...`);
});



