const { validationResult } = require("express-validator");

exports.submitForm = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Simulating form submission success
  res.status(200).json({ message: "Form submitted successfully!", data: req.body });
};
