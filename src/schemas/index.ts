import { createCustomerSchema } from "./customer.schema";
import { schemaMailer } from "./mailer.schema";
import { createJwtSchema, verifyJwtSchema } from "./jwt.schema";
import {
  createEmailVerificationSchema,
  approveEmail,
} from "./emailVerification.schema";
import { authSchema } from "./auth.schema";
import { userSchema } from "./user.schema";

export {
  createCustomerSchema,
  schemaMailer,
  createJwtSchema,
  createEmailVerificationSchema,
  authSchema,
  userSchema,
  verifyJwtSchema,
  approveEmail,
};
