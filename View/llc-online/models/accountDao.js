const mongoose = require("mongoose");
const { NativeModules } = require("react-native-web");

const Schema = mongoose.Schema; 

const AccountSchema = new Schema({
    first_name : {type: String, required: true, maxLength: 100},
    last_name : {type: String, required: true, maxLength: 100},
    account_type : {type: String, required: true},
    email : { type: String, required: true},
    password : {type: String, required: true}
});

const accountModel = mongoose.model("Account", AccountSchema);