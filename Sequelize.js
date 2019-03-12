var Sequelize = require("sequelize");

const sequelize = new Sequelize("mydb", "root", "", {
  host: "localhost",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});

const CustomerSchema = sequelize.define("customer", {
  name: Sequelize.STRING,
  address: Sequelize.STRING
});

// CustomerSchema.sync();  //For the first time we have to use

module.exports = {CustomerSchema}