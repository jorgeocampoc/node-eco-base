import { sequelize, DataTypes } from "../config/index";
import { Roles } from "../enum/role.enum";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        is: /^(?=.*[a-z])[a-z\s]+$/i,
        len: [3, 50],
      },
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        is: /^(?=.*[a-z])[a-z\s]+$/i,
        len: [3, 50],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM(...Object.values(Roles)),
      defaultValue: Roles.CUSTOMER,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    verification_email: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "users",
    createdAt: "create_at",
    updatedAt: "updated_at",
  },
);

export default User;
