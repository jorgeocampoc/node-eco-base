import { type Request, type Response, type NextFunction } from "express";
import { ErrorMessage, Roles } from "../enum";

const verifyRoleValidByParams = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { role = "" } = req.params;
    if (role == "all") {
      return next();
    }
    if (!Object.values(Roles).includes(role as Roles)) {
      return res.status(403).json({
        error: ErrorMessage.ROLE_NOT_VALID,
      });
    }
    next();
  } catch (error) {
    res.status(404).json({
      error: ErrorMessage.INVALID_DATA,
    });
  }
};


export { verifyRoleValidByParams };
