const AccountModel = require("../../models/accountDao");

exports.createAccount = async (req, res) => {
  try {
    const { first_name, last_name, account_type, email, password } = req.body;
    const newAccount = new AccountModel({ first_name, last_name, account_type, email, password });
    const createdAccount = await newAccount.save();
    res.status(201).json(createdAccount);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
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

exports.searchAccounts = async (req, res) => {
  try {
    const account = await AccountModel.findById(req.params.id);
    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }
    res.json(account);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};
