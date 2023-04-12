const express = require("express");
const router = express.Router();
const accountController = require("../logic/accountController");

// Create a new account
router.post("/", accountController.createAccount);

// Get an account by ID
router.get("/:id", accountController.getAccount);

// Update an account by ID
router.put("/:id", accountController.updateAccount);

// Delete an account by ID
router.delete("/:id", accountController.deleteAccount);

// Log in to an existing account
router.post('/login', accountController.login);

module.exports = router;