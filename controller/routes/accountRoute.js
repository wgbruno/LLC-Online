const express = require("express");
const router = express.Router();

const accountController = require("../logic/accountController");

// Create a new account
router.post("/account", accountController.createAccount);
// Get an account by ID
router.get("/account/:id", accountController.getAccount);
// Update an account by ID
router.put("account/:id", accountController.updateAccount);
// Delete an account by ID
router.delete("account/:id", accountController.deleteAccount);
// Log in to an existing account
router.post('/login', accountController.login);
// Get admins by ID
router.get("/account/admin/:id", accountController.getAdmins);
// Get staff by ID
router.get("/account/staff:id", accountController.getStaff);
// Get student by ID
router.get("/account/:id", accountController.getStudents);

module.exports = router;