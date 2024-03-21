const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.db_url,{
  dialect: 'mysql',
  dialectModule: require('mysql2'),
})

module.exports = sequelize;
