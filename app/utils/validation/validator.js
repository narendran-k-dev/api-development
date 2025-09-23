const { body } = require("express-validator");
const { duplicateChecker } = require("./duplicateChecker.js");

exports.validatorchecker = [
  body("title")
    .trim()
    .notEmpty().withMessage("Title is required")
    .custom(async (value) => {
      await duplicateChecker(value); 
      return true;
    }),
  body("description")
    .trim()
    .notEmpty().withMessage("description is required"),
  body("published")
    .isBoolean().withMessage("Published must be true or false")
];
