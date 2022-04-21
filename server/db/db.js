const Sequelize = require("sequelize");

const db = new Sequelize(
  process.env.DATABASE_URL ||
    process.env.DATABASE_NAME || {
      logging: false,
    }
);

module.exports = db;
