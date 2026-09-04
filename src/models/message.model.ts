import { sequelize, DataTypes } from "../config/index";
const Message = sequelize.define(
  "Message",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    conversation_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    tableName: "mesages",
    createdAt: "create_at",
    updatedAt: "updated_at",
  },
);

export default Message;
