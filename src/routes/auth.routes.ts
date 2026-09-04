import { Router } from "express";
import { auth, logout } from "../controllers";
import {
  checkIsActiveUser,
  checkUserExists,
  checkIsEmailVerified,
  checkVerifyPassHash,
  checkSchemaAuth
} from "../middlewares";

const router = Router();
router.post(
  "/",
  [checkSchemaAuth,checkUserExists, checkIsActiveUser,checkVerifyPassHash, checkIsEmailVerified],
  auth,
);
router.post(
  "/logout",
  logout,
);

module.exports = router;
