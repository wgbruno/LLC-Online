require('dotenv').config();
const mongoose = require('mongoose');

exports.connect = async function(){
    let uri = process.env.DB_URI; //production DB

    await mongoose.connect(uri,function(err){
        if(err) console.log(err);
    });
}

exports.disconnect = async function(){
    await mongoose.connection.close();
}