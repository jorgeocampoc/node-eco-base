import { type Request, type Response, type NextFunction } from "express";
import { createCustomerSchema } from "../schemas/index";

const verifyFieldsCustomer = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userCustomer = createCustomerSchema.parse(req.body);
    
    req.newUserCustomer = userCustomer;
  } catch (error) {
    res.status(400).json({
      error: "Invalid dataaaa",
    });
  }
  next();
};



export { verifyFieldsCustomer,  };
