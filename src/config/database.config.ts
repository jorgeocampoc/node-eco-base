import { Sequelize, DataTypes } from "sequelize";
import env from "./env.config";

const sequelize = new Sequelize(env.DATABASE, {
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    console.log("Database on");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export = {
  connectDatabase,
  DataTypes,
  sequelize,
};
