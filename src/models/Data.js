import { info } from "console";
import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const data = sequelize.define("data", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  id_user: {
    type: DataTypes.INTEGER,
    require: true,
  },

  id_data: {
    type: DataTypes.INTEGER,
    require: true,
  },
});
