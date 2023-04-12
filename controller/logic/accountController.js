const Account = require('../../models/accountDao');

// Controller functions for CRUD ops

exports.createAccount = async function(req, res, next) {
  try {
    const newAccount = req.body;
    const createdAccount = await Account.create(newAccount);
    res.status(201).json(createdAccount);
  } catch (err) {
    next(err);
  }
};

exports.getAccount = async function(req, res, next) {
  try {
    const accountId = req.params.id;
    const foundAccount = await Account.findById(accountId);
    if (!foundAccount) {
      const error = new Error('Account not found');
      error.statusCode = 404;
      throw error;
    }
    res.json(foundAccount);
  } catch (err) {
    next(err);
  }
};

exports.updateAccount = async function(req, res, next) {
  try {
    const accountId = req.params.id;
    const updatedAccount = req.body;
    const result = await Account.findByIdAndUpdate(accountId, updatedAccount, { new: true });
    if (!result) {
      const error = new Error('Account not found');
      error.statusCode = 404;
      throw error;
    }
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.deleteAccount = async function(req, res, next) {
  try {
    const accountId = req.params.id;
    const result = await Account.findByIdAndDelete(accountId);
    if (!result) {
      const error = new Error('Account not found');
      error.statusCode = 404;
      throw error;
    }
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const account = await AccountModel.findOne({ email, password });
    if (!account) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.json(account);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};