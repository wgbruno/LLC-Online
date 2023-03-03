const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const AccountSchema = new mongoose.Schema
({
    first_name : {type: String, required: true, maxLength: 100},
    last_name : {type: String, required: true, maxLength: 100},
    account_type : {type: String, required: true},
    email : { type: String, required: true},
    password : {type: String, required: true}
});

const accountModel = mongoose.model("Account", AccountSchema);

exports.create = async function( newAccount )
{
    const user = new accountModel( newAccount );
    const createdAccount = await account.save( );
    return createdAccount;
}

exports.login = async function( email, password )
{
    let account = await userModel.findOne( { email: email, password: password } );
    return account;
}

exports.searchAccounts = async function( id )
{
    let foundAccount = await accountModel.findById( id );
    return foundAccount;
}