import { Router } from "express";
import { activeDisableAccount, getAllByRole } from "../controllers";
import {
  checkIsActiveUser,
  verifyRole,
  verifyToken,
  verifyRoleValidByParams,
  checkUserExists,
} from "../middlewares";
import { Roles } from "../enum";

const router = Router();
router.get(
  "/get-all-by-role/:role",
  [verifyRoleValidByParams, verifyToken,checkUserExists, checkIsActiveUser, verifyRole(Roles.ADMIN)],
  getAllByRole,
);
router.put('/active-disable-user/:email',[verifyToken, checkUserExists,checkIsActiveUser, verifyRole(Roles.ADMIN),],activeDisableAccount)

module.exports = router;
