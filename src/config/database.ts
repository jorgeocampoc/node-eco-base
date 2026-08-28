const { Sequelize, DataTypes, UUID, UUIDV4 } = require("sequelize");
const env = require("./env");

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
    await sequelize.sync({ force: true });
    console.log("Database on");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = {
  connectDatabase,
  DataTypes,
  sequelize,
  UUID,
  UUIDV4,
};
