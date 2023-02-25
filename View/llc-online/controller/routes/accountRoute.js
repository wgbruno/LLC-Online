const express = require("express");
const router = express.Router();
const accountController = require("../accountController");

// Create a new account
router.post("/", accountController.createAccount);

// Log in to an existing account
router.post("/login", accountController.login);

// Search for an account by ID
router.get("/:id", accountController.searchAccounts);

module.exports = router;