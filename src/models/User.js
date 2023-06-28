import { info } from "console";
import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js";

export const user = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  name: {
    type: DataTypes.STRING,
  },

  username: {
    type: DataTypes.STRING,
    require: true,
  },

  email: {
    type: DataTypes.STRING,
    require: true,
  },

  password: {
    type: DataTypes.STRING,
    require: true,
  },
});
