import { type Request, type Response, type NextFunction } from "express";
import jwt from "jsonwebtoken";
import env from "../config/env.config";
import { ErrorMessage } from "../enum";
const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const accessToken = req.cookies["access-token"];
    const user = jwt.verify(accessToken, env.SECRET_KEY);
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      error: ErrorMessage.TOKEN_EXPIRED,
    });
  }
};

export { verifyToken };
