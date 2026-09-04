import { sequelize, DataTypes } from "../config/index";
const Address = sequelize.define(
  "Address",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    customer_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    addresss_line: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
  },
  {
    tableName: "address",
    createdAt: "create_at",
    updatedAt: "updated_at",
  },
);

export default Address;
