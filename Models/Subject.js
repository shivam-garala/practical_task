const Sequelize = require("sequelize");
const sequelize = require("../config");

const Subject = sequelize.define("subjects", {
  id: { type: Sequelize.INTEGER(11).UNSIGNED, autoIncrement: true, allowNull: false, primaryKey: true, },
  board_or_class_selection_id: { type: Sequelize.INTEGER(11), allowNull: false },
  subject: { type: Sequelize.STRING(255), allowNull: false },
  deleted_at: { type: Sequelize.STRING, allowNull: true },
},
  {
    timestamps: false,
  }
);


module.exports = Subject;
