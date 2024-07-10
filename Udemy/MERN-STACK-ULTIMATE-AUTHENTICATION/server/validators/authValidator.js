import { body } from "express-validator";

export const userSignUpvalidator = [
  body("name").notEmpty().withMessage(" name must not be empty"),
  body("email").notEmpty().withMessage(" must be a valid email"),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters long")
];
export const userSignInvalidator = [
  body("email").notEmpty().withMessage(" must be a valid email"),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters long")
];
