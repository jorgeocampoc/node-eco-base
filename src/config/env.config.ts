import dotenv from "dotenv";
dotenv.config();

const getEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) throw new Error(`Env ${key} not found`);
  return value;
};

const env = {
  PORT_SERVER: getEnv("PORT"),
  BACKEND: getEnv("BACKEND"),
  SECRET_KEY_REFRESH: getEnv("SECRET_KEY_REFRESH"),
  SECRET_KEY: getEnv("SECRET_KEY"),
  DOMAIN_RESEND: getEnv("DOMAIN_RESEND"),
  API_KEY: getEnv("API_KEY"),
  FRONTEND: getEnv("FRONTEND"),
  DATABASE: `postgres://${getEnv("DB_USER")}:${getEnv("DB_PASS")}@${getEnv("DB_HOST")}:${getEnv("DB_PORT")}/${getEnv("DB")}`,
};

export default env;
