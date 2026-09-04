import { type Request, type Response } from "express";
import { serviceAuth } from "../services";
import { ErrorMessage, SuccessMessages } from "../enum";
import jwt from "jsonwebtoken";
import env from "../config/env.config";
import { generateToken } from "../utils";
import { userSchema } from "../schemas";

const auth = async (req: Request, res: Response) => {
  try {
    const { accessToken, refreshToken } = await serviceAuth(req.user);
    const { password, is_active, verification_email, ...userResponse } =
      req.user;

    res.cookie("access-token", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 1000,
    });

    res.cookie("refresh-token", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      user: userResponse,
      message: SuccessMessages.AUTH_USER,
    });
  } catch (error) {
    res.status(500).json({
      error: ErrorMessage.INTERNAL_SERVER_ERROR,
    });
  }
};

const refreshToken = async (req: Request, res: Response) => {
  try {
    const token = req.cookies["refresh-token"];
    if (!token) {
      return res.status(401).json({
        error: ErrorMessage.TOKEN_EXPIRED,
      });
    }
    const user = jwt.verify(token, env.SECRET_KEY_REFRESH);
    const accessToken = generateToken(userSchema.parse(user), "1h");
    res.cookie("access-token", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 1000,
    });
    res.status(200).json({
      message: SuccessMessages.AUTH_USER,
    });
  } catch (error) {
    res.status(401).json({
      error: ErrorMessage.TOKEN_EXPIRED,
    });
  }
};

const logout = async (req: Request, res: Response) => {
  try {
    res.clearCookie("access-token");
    res.clearCookie("refresh-token");
    res.status(200).json({
      message: SuccessMessages.LOGOUT,
    });
  } catch (error) {
    res.status(401).json({
      error: ErrorMessage.INTERNAL_SERVER_ERROR,
    });
  }
};

export { auth, refreshToken, logout };
