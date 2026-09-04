import { Roles } from "../enum/role.enum";
import User from "../models/user.model";

const serviceGetAllCustomers = async () => {
  try {
    const customers = await User.findAll({
      where: {
        role: Roles.CUSTOMER,
      },
      attributes: { exclude: ['password'] },
    });
    return customers;
  } catch (error) {
    throw error;
  }
};

export { serviceGetAllCustomers };
