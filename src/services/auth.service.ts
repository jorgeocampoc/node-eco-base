import User from "../models/user.model";
import { UserSchema } from "../types/user.type";
import { generateRefreshToken, generateToken } from "../utils";

const serviceAuth = async (user: UserSchema) => {
  try {
    const accessToken = generateToken(user, "1h");
    const refreshToken = generateRefreshToken(user, "5h");
    return { accessToken, refreshToken };
  } catch (error) {
    throw error;
  }
};



export { serviceAuth, };
