const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
    first_name: {type: String, required: true, maxLength: 100},
    last_name: {type: String, required: true, maxLength: 100},
    account_type: {type: String, required: true, enum: ['admin', 'staff', 'faculty', 'student']},
    email: {type: String, required: true},
    password: {type: String, required: true}
});

const AccountModel = mongoose.model("Account", AccountSchema);

exports.create = async function(newAccount) {
    const account = new AccountModel(newAccount);
    const createdAccount = await account.save();
    return createdAccount;
}

exports.read = async function(id) {
    const account = await AccountModel.findById(id);
    return account;
}

exports.update = async function(id, updatedAccount) {
    const account = await AccountModel.findByIdAndUpdate(id, updatedAccount, {new: true});
    return account;
}

exports.delete = async function(id) {
    const account = await AccountModel.findByIdAndDelete(id);
    return account;
}

exports.findByEmailAndPassword = async function(email, password) {
    let foundAccount = await accountModel.findOne({ email: email, password: password });
    return foundAccount;
}