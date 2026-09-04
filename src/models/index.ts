import User from "./user.model";
import Order from "./rrder.model";
import OrderItem from "./OrderItem";
import Product from "./Product";
import Address from "./address.model";
import Converstions from "./conversation.model";
import Message from "./message.model";
import EmailVerifications from "./emailVerifications,model";

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
User.hasOne(Address, {
  foreignKey: "customer_id",
});
Address.belongsTo(User, {
  foreignKey: "customer_id",
});

// One-To-Many relationships USER - CONVERSTIONS
User.belongsToMany(Converstions, {
  through: "users_has_conversations",
  foreignKey: "users_id",
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

// One-To-Many relationships USERS - EMAILVERIFICATION
User.hasOne(EmailVerifications, {
  foreignKey: "user_id",
});
EmailVerifications.belongsTo(User, {
  foreignKey: "user_id",
});

export {
  User,
  Order,
  OrderItem,
  Product,
  Address,
  Converstions,
  Message,
  EmailVerifications,
};
