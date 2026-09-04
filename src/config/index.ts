import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import corsOptions from "./cors.config";
import env from "./env.config";
import { connectDatabase, DataTypes, sequelize } from "./database.config";
export = {
  express,
  env,
  cookieParser,
  cors,
  corsOptions,
  connectDatabase,
  DataTypes,
  sequelize,
};
