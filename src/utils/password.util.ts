import argon2 from "argon2";
import { PASS_REGEX } from "../constant/index";
const isValidPassword = (pass: string): boolean => {
  return PASS_REGEX.test(pass);
};

const hashPassword = async (pass: string): Promise<string> => {
  try {
    const newPassHash = await argon2.hash(pass);
    return newPassHash;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { isValidPassword, hashPassword };
