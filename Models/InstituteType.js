const Sequelize = require("sequelize");
const sequelize = require("../config");

const InstituteType = sequelize.define("institute_type_selections", {
  id: { type: Sequelize.INTEGER(11).UNSIGNED, autoIncrement: true, allowNull: false, primaryKey: true, },
  user_id: { type: Sequelize.INTEGER(11), allowNull: false },
  institute_type: { type: Sequelize.STRING(255), allowNull: false },
  deleted_at: { type: Sequelize.STRING, allowNull: true },
},
  {
    timestamps: false,
  }
);


module.exports = InstituteType;
