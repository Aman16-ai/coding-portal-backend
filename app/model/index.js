const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.db_url)

module.exports = sequelize;
