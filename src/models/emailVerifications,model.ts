import { sequelize, DataTypes } from "../config/index";
const EmailVerifications = sequelize.define(
  "EmailVerifications",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "email_verifications",
    createdAt: "create_at",
    updatedAt: "updated_at",
  },
);

export default EmailVerifications;
