const dotenv = require("dotenv");
dotenv.config();

const getEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) throw new Error(`Env ${key} not found`);
  return value;
};

const env = {
  PORT_SERVER: getEnv("PORT"),
  FRONTEND: getEnv("FRONTEND"),
  DATABASE: `postgres://${getEnv("DB_USER")}:${getEnv("DB_PASS")}@${getEnv("DB_HOST")}:${getEnv("DB_PORT")}/${getEnv("DB")}`,
};

module.exports = env;
