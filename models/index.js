require('dotenv').config();
const mongoose = require('mongoose');

//const userpass = "Dhvx9z4Ckw8MkcVy"

exports.connect = function(where){
    let uri = process.env.DB_URI; // production DB
    if(where==='test') uri = process.env.TESTDB_URI; //Test DB

    mongoose.connect(uri,function(err){
        if(err) console.log(err);
    });
}

exports.disconnect = async function(){
    await mongoose.connection.close();
}