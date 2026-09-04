import {
  checkUserExists,
  checkIsActiveUser,
  checkVerifyPassHash,
  checkIsEmailVerified,
  checkVerifyPass,
  checkIsEmailRegistered,
  verifyRole,
  checkSchemaAuth,
} from "./checkUser.middleware";
import { verifyFieldsCustomer } from "./customer.middleware";
import {
  checkSchemaVerificationEmail,
  verifyTokenDB,
} from "./checkEmailVerification.middleware";
import { verifyToken } from "./jwt.middleware";
import { verifyRoleValidByParams } from "./checkParams.middleware";

export {
  verifyFieldsCustomer,
  verifyRoleValidByParams,
  checkSchemaAuth,
  verifyToken,
  checkVerifyPass,
  checkUserExists,
  checkIsEmailRegistered,
  checkIsActiveUser,
  checkIsEmailVerified,
  checkVerifyPassHash,
  verifyRole,
  checkSchemaVerificationEmail,
  verifyTokenDB,
};
