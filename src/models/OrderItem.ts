import { sequelize, DataTypes }from "../config/index";
const OrderItem = sequelize.define(
  "OrderItem",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    product: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    order: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      validate: {
        min: 1,
      },
    },
    unit_price: {
      type: DataTypes.DECIMAL(10,2),
      defaultValue: 0,
      validate: {
        min: 0,
      },
    },
    sub_total: {
      type: DataTypes.DECIMAL(10,2),
      defaultValue: 0,
      validate: {
        min: 0,
      },
    },
    created_at: {
      type: DataTypes.DATE(6),
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE(6),
    },
  },
  {
    tableName: "order_items",
    timestamps: false,
  },
);

export default OrderItem;
