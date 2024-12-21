const Sequelize = require("sequelize");
const sequelize = require("../config");

const BoardAndClassSelection = sequelize.define("board_and_class_selections", {
  id: { type: Sequelize.INTEGER(11).UNSIGNED, autoIncrement: true, allowNull: false, primaryKey: true, },
  user_id: { type: Sequelize.INTEGER(11), allowNull: false },
  institute_type_selection_id: { type: Sequelize.INTEGER(11), allowNull: false },
  board_or_class: { type: Sequelize.STRING(255), allowNull: false },
  medium: { type: Sequelize.STRING(255), allowNull: false },
  standard: { type: Sequelize.STRING(255), allowNull: false },
  deleted_at: { type: Sequelize.STRING, allowNull: true },
},
  {
    timestamps: false,
  }
);


module.exports = BoardAndClassSelection;
