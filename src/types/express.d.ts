import type { CreateCustomer, UserSchema } from "./index";

declare global {
  namespace Express {
    interface Request {
      newUserCustomer: CreateCustomer;
      user: UserSchema;
    }
  }
}
