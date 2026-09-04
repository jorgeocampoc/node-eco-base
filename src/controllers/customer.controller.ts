import { type Request, type Response } from "express";
import { serviceCreateCustomer } from "../services/index";
import { ErrorMessage, SuccessMessages } from "../enum";
import { User } from "../models";

const registerCustomer = async (req: Request, res: Response) => {
  try {
    const { newUserCustomer } = req;
    await serviceCreateCustomer(newUserCustomer);
    return res.status(201).json({ message: SuccessMessages.CUSTOMER_CREATED });
  } catch (error) {
    res.status(409).json({
      error: ErrorMessage.INTERNAL_SERVER_ERROR,
    });
  }
};

const approveEmail = async (req: Request, res: Response) => {
  try {
    const { user } = req;
    const { verification_email, email } = user;
    if (verification_email) {
      return res
        .status(201)
        .json({ message: SuccessMessages.EMAIL_IS_ALREADY_APPOVED });
    }

    await User.update(
      { verification_email: true },
      {
        where: {
          email,
        },
      },
    );
    return res.status(201).json({ message: SuccessMessages.EMAIL_APPOVED });
  } catch (error) {
    res.status(409).json({
      error: ErrorMessage.INTERNAL_SERVER_ERROR,
    });
  }
};

export { registerCustomer, approveEmail };
