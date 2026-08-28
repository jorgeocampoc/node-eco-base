const User = require("./User");
const Order = require("./Order");
const OrderItem = require("./OrderItem");
const Product = require("./Product");
const Address = require("./Address");
const Converstions = require("./Conversation");
const Message = require("./Message");

// One-To-Many relationships USER-ORDER
User.hasMany(Order, {
  foreignKey: "customer_id",
});
Order.belongsTo(User, {
  foreignKey: "customer_id",
});

// One-To-Many relationships ORDER - ORDER_ITEMS
Order.hasMany(OrderItem, {
  foreignKey: "order_id",
});
OrderItem.belongsTo(Order, {
  foreignKey: "order_id",
});

// One-To-Many relationships PRODUCT - ORDER_ITEMS
Product.hasMany(OrderItem, {
  foreignKey: "product_id",
});
OrderItem.belongsTo(Product, {
  foreignKey: "product_id",
});

// One-To-Many relationships USER - ADDRESS
Address.hasOne(User, {
  foreignKey: "address_id",
});
User.belongsTo(Address, {
  foreignKey: "address_id",
});

// One-To-Many relationships USER - CONVERSTIONS
User.belongsToMany(Converstions, {
  through: "users_has_conversations",
  foreignKey: "users_id",
  createdAt: "create_at",
  updatedAt: "updated_at",
});
Converstions.belongsToMany(User, {
  through: "users_has_conversations",
  foreignKey: "converstions_id",
});

// One-To-Many relationships CONVERSATIONS - MESSAGES
Converstions.hasMany(Message, {
  foreignKey: "conversation_id",
});
Message.belongsTo(Converstions, {
  foreignKey: "conversation_id",
});

module.exports = {
  User,
  Order,
  OrderItem,
  Product,
  Address,
  Converstions,
  Message,
};
