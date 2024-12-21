const Sequelize = require("sequelize");
const sequelize = require("../config");

const User = sequelize.define("users", {
  id: { type: Sequelize.INTEGER(11).UNSIGNED, autoIncrement: true, allowNull: false, primaryKey: true, },
  name: { type: Sequelize.STRING(255), allowNull: false },
  deleted_at: { type: Sequelize.STRING, allowNull: true },
},
  {
    timestamps: false,
  }
);


module.exports = User;
