import { registerCustomer, approveEmail } from "./customer.controller";
import { getAllByRole, activeDisableAccount } from "./admin.controller";
import { auth, refreshToken, logout } from "./auth.controller";

export {
  registerCustomer,
  getAllByRole,
  auth,
  refreshToken,
  logout,
  approveEmail,
  activeDisableAccount,
};
