import { type Request, type Response, type NextFunction } from "express";
import User from "../models/user.model";
import { authSchema, userSchema } from "../schemas";
import { ErrorMessage, Roles } from "../enum";
import argon2 from "argon2";
import { isValidPassword } from "../utils";

const checkSchemaAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    req.body = authSchema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json({
      error: ErrorMessage.INVALID_DATA,
    });
  }
};

const checkUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email = "" } = req.user ?? req.body ?? {};

    const user = await User.findOne({
      where: { email },
      attributes: [
        "id",
        "email",
        "password",
        "first_name",
        "last_name",
        "is_active",
        "verification_email",
        "role",
      ],
    });
    if (!user?.dataValues) {
      return res.status(404).json({
        error: ErrorMessage.USER_NOT_FOUND,
      });
    }
    req.user = userSchema.parse(user?.dataValues);
    next();
  } catch (error) {
    res.status(400).json({
      error: ErrorMessage.INVALID_DATA,
    });
  }
};

const checkIsActiveUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { is_active = false } = req.user;
  if (!is_active) {
    return res.status(404).json({
      error: ErrorMessage.USER_NOT_ACTIVE,
    });
  }
  next();
};

const checkIsEmailVerified = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { user } = req;
  if (!user.verification_email) {
    return res.status(404).json({
      error: ErrorMessage.EMAIL_NOT_VERIFIED,
    });
  }
  next();
};

const checkVerifyPassHash = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { password } = req.body;
  const { user } = req;
  try {
    const band: boolean = await argon2.verify(user.password, password);
    if (!band) {
      return res.status(404).json({
        error: ErrorMessage.PASSWORD_NOT_MATCH,
      });
    }
    next();
  } catch (error) {
    res.status(404).json({
      error: ErrorMessage.INVALID_DATA,
    });
  }
};

const checkVerifyPass = (req: Request, res: Response, next: NextFunction) => {
  const { password = "" } = req.body ?? req.params;
  const band = isValidPassword(password);
  if (!band) {
    return res.status(400).json({
      error: ErrorMessage.PASS_NOT_ALLOWED,
    });
  }
  next();
};

const checkIsEmailRegistered = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email = "" } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(409).json({
        error: ErrorMessage.EMAIL_IS_ALREADY_REG,
      });
    }
    next();
  } catch (error) {
    res.status(404).json({
      error: ErrorMessage.INVALID_DATA,
    });
  }
};

const verifyRole = (rol: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { role = "" } = req.user ?? req.body ?? {};
    if (!Object.values(Roles).includes(role)) {
      return res.status(403).json({
        error: ErrorMessage.ROLE_NOT_VALID,
      });
    }
    if (role != rol) {
      return res.status(403).json({
        error: ErrorMessage.FORBIDDEN,
      });
    }
    next();
  };
};

export {
  checkUserExists,
  checkIsActiveUser,
  checkIsEmailVerified,
  checkVerifyPassHash,
  checkVerifyPass,
  checkIsEmailRegistered,
  verifyRole,
  checkSchemaAuth,
};
