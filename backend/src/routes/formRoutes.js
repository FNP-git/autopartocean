const express = require("express");
const { body, validationResult } = require("express-validator");
const nodemailer = require("nodemailer");
require("dotenv").config();

const router = express.Router();

// Create transporter for sending emails
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Validation middleware (unchanged)
const validateForm = [
  body("fullName")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Full Name must be at least 3 characters long")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("Full Name must contain only letters and spaces"),

  body("phone")
    .trim()
    .isLength({ min: 10, max: 10 })
    .withMessage("Phone number must be exactly 10 digits")
    .matches(/^\d+$/)
    .withMessage("Phone number must contain only numbers"),

  body("email")
    .trim()
    .isLength({ min: 7 })
    .withMessage("Email must be at least 7 characters long")
    .isEmail()
    .withMessage("Invalid email format"),

  body("zip")
    .trim()
    .isLength({ min: 5, max: 5 })
    .withMessage("Zip Code must be exactly 5 digits")
    .matches(/^\d+$/)
    .withMessage("Zip Code must contain only numbers"),
  
  body("vin") // Previously unvalidated
    .optional({ checkFalsy: true }) // Validate only if present
    .trim()
    .isLength({ min: 17, max: 17 })
    .withMessage("VIN must be exactly 17 characters"),
    
  body("year") // Previously unvalidated
    .optional({ checkFalsy: true })
    .isInt({ min: 1900, max: new Date().getFullYear() })
    .withMessage(`Year must be between 1900-${new Date().getFullYear()}`)

];

router.get("/", (req, res) => {
  res.json({ message: "API is working!" });
});

// Form submission route
router.post("/", validateForm, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Destructure all fields including the hidden leadLabel
  const { leadLabel, fullName, phone, email, zip, year, make, model, part, vin } = req.body;

  // Email options including the hidden field value
  const mailOptions = {
    from: `"AutoPart Ocean Support" <devops@fnpglobal.com>`,
    to: "leads@autopartocean.com",
    subject: "New Form Submission AutoPart Ocean",
    text: 
      `Company": ${leadLabel}\n` +
      `Full Name: ${fullName}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n` +
      `Zip: ${zip}\n` +
      `Year: ${year}\n` +
      `Make: ${make}\n` +
      `Model: ${model}\n` +
      `Part: ${part}\n` +
      `VIN: ${vin || "Not Provided"}\n\n` +
      `--\nAutoPart Ocean Team`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Form submitted and email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

module.exports = router;
