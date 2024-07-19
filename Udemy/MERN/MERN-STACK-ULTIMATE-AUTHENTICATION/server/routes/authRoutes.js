import express from "express";
import {
  signup,
  signin,
  accountActivation
} from "../controllers/authController.js";
const router = express.Router();

import {
  userSignUpvalidator,
  userSignInvalidator
} from "../validators/authValidator.js";
import { runValidation } from "../validators/index.js";

router.post("/api/signup", userSignUpvalidator, runValidation, signup);
router.post("/api/signin", userSignInvalidator, runValidation, signin);
router.post("/account-activation", accountActivation);

module.exports = router;
