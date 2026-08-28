const { sequelize, DataTypes, UUID, UUIDV4 } = require("../config/index");
const Order = sequelize.define(
  "Order",
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
    seller_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    order_date: {
      type: DataTypes.DATE(6),
      allowNull: false,
      defaultValue: DataTypes.NOW,
      validate: {
        isDate: true
      },
    },
    status: {
      type: DataTypes.ENUM,
      values: ["pending", "finished", "cancelled"],
    },
    total_amount: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0,
      validate: {
        min: 0,
      },
    },
    updated_at: {
      type: DataTypes.DATE(6),
    },
  },
  {
    tableName: "orders",
    timestamps: false,
  },
);

module.exports = Order;
