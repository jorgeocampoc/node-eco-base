import { Router } from "express";
const router = Router();
import { approveEmail, registerCustomer } from "../controllers";
import {
  verifyFieldsCustomer,
  checkVerifyPass,
  checkIsEmailRegistered,
  checkSchemaVerificationEmail,
  checkUserExists,
  verifyTokenDB,
} from "../middlewares";

router.post(
  "/",
  [verifyFieldsCustomer, checkIsEmailRegistered, checkVerifyPass],
  registerCustomer,
);
router.get(
  "/approve-email",
  [checkSchemaVerificationEmail, verifyTokenDB, checkUserExists],
  approveEmail,
);

module.exports = router;
