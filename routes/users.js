const express = require("express");
const { check } = require("express-validator");

const userController = require("../controllers/userController");

const router = express.Router();

// route for signup
router.post(
  "/signup",
  [
    check("name", "The name is mandatory").not().isEmpty(),
    check("email", "Add a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  userController.signup
);

// route for login
router.post(
  "/login",
  check("email", "Add a valid email").isEmail(),
  check(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({ min: 6 }),
  userController.login
);

module.exports = router;
