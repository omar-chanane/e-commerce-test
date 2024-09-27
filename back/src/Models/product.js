const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Product = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    code: { type: DataTypes.STRING, allowNull: true },
    name: { type: DataTypes.STRING, allowNull: true },
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    category: DataTypes.STRING,
    price: { type: DataTypes.FLOAT, allowNull: false, defaultValue: 0 },
    quantity: { type: DataTypes.INTEGER, defaultValue: 0 },
    internalReference: DataTypes.STRING,
    shellId: { type: DataTypes.INTEGER, allowNull: false },
    inventoryStatus: { type: DataTypes.ENUM("INSTOCK", "LOWSTOCK", "OUTOFSTOCK") },
    rating: { type: DataTypes.FLOAT, defaultValue: 0 },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

module.exports = Product;