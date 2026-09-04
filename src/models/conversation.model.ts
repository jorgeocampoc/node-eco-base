import { sequelize, DataTypes } from "../config/index";
const Conversation = sequelize.define(
  "Conversation",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    customer_id_one: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    customer_id_two: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    tableName: "conversations",
    createdAt: "create_at",
    updatedAt: "updated_at",
  },
);

export default Conversation;
