require('dotenv').config();
const mongoose = require('mongoose');

//const userpass = "Dhvx9z4Ckw8MkcVy"

exports.connect = function(where){
    const uri = "mongodb+srv://mabardsley:Blue6907@cluster0.winsvzg.mongodb.net/?retryWrites=true&w=majority"; // production DB
    if(where==='test') uri = process.env.TESTDB_URI; //Test DB
    if(process.env.CI) uri = 'mongodb+srv://mabardsley:Blue6907@cluster0.winsvzg.mongodb.net/?retryWrites=true&w=majority'; //MongoDB Cluster0

    mongoose.connect(uri,function(err){
        if(err) console.log(err);
    });
}


exports.disconnect = async function(){
    await mongoose.connection.close();
}