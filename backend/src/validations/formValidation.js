const { check } = require("express-validator");

exports.validateForm = [
  check("fullName")
    .isAlpha("en-US", { ignore: " " })
    .withMessage("Full Name must contain only alphabets")
    .isLength({ min: 3 })
    .withMessage("Full Name must be at least 3 characters long"),

  check("phone")
    .isNumeric()
    .withMessage("Phone number must contain only numbers")
    .isLength({ min: 10, max: 10 })
    .withMessage("Phone number must be exactly 10 digits"),


  check("email")
    .isEmail()
    .withMessage("Invalid email format")
    .isLength({ min: 7 })
    .withMessage("Email must be at least 7 characters long"),

];
