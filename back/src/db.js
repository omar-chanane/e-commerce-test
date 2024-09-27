const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('product_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;