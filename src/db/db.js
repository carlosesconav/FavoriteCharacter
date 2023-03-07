import Sequelize from "sequelize";

export const sequelize = new Sequelize('data_api', 'root', '', {

    host: 'localhost',
    dialect: 'mysql'

});