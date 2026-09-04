import { type Request, type Response, type NextFunction } from "express";
import { approveEmail } from "../schemas";
import { ErrorMessage } from "../enum";
import { EmailVerifications } from "../models";

const checkSchemaVerificationEmail = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    req.body = approveEmail.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json({
      error: ErrorMessage.INVALID_DATA,
    });
  }
};
const verifyTokenDB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { token } = req.body;
    const result = await EmailVerifications.findOne({ where: { token } });
    if (!result) {
      return res.status(400).json({
        error: ErrorMessage.TOKEN_INVALID,
      });
    }
    next();
  } catch (error) {
    res.status(400).json({
      error: ErrorMessage.INVALID_DATA,
    });
  }
};

export { verifyTokenDB, checkSchemaVerificationEmail };
