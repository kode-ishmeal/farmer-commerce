const express = require("express");

const { createAccount, loginUser } = require("../controllers/users.controller");

const router = express.Router();

router.post("/register", createAccount);
router.post("/login", loginUser);

module.exports = router;
