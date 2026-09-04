import jwt, { SignOptions } from "jsonwebtoken";
import { CreateJwtSchema } from "../types/jwt.type";
import env from "../config/env.config";

const generateToken = (
  data: CreateJwtSchema,
  expiresIn?: SignOptions["expiresIn"],
): string => {
  return jwt.sign(data, env.SECRET_KEY, {
    algorithm: "HS256",
    ...(expiresIn && { expiresIn }),
  });
};
const generateRefreshToken = (
  data: CreateJwtSchema,
  expiresIn?: SignOptions["expiresIn"],
): string => {
  return jwt.sign(data, env.SECRET_KEY_REFRESH, {
    algorithm: "HS256",
    ...(expiresIn && { expiresIn }),
  });
};
export { generateToken, generateRefreshToken };
