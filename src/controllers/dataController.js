import { data } from "../models/Data.js";
import axios from "axios";
import chalk from "chalk";
import * as dotenv from "dotenv";
dotenv.config();

const urlAPI = process.env.ENDPOINT_API;

export const getFavorites = async (req, res) => {
  try {
    console.log(chalk.bgGreen("======Init getFavorites======"));
    const { id_user } = req.params;
    const datas = await data.findAll({ where: { id_user: id_user } });
    let obj1 = {};
    let characters = [];

    if (datas) {
      for (let obj of datas) {
        obj1 = {
          id_data: obj.dataValues.id_data,
        };

        let favorite = await axios({
            method: "GET",
            url: `${urlAPI}/character/${obj1.id_data}`,
            auth: {},
          });
    
          console.log(favorite.data);
          characters.push(favorite.data);
      }

      return res.status(200).json({
        status: 200,
        message: "Solicitud exitosa",
        data: characters
        
      });
    } else {
      return res.status(400).json({
        status: 400,
        message: "Solicitud erronea",
      });
    }
  } catch (error) {
    console.log("======Error getFavorites======");
    console.log(error);
    return res.status(500).json({
      status: 500,
      message: "Ha ocurrido un error",
    });
  }
};

export const saveData = async (req, res) => {
  try {
    console.log(chalk.bgGreen("======Init saveData======"));
    const { id_user, id_data } = req.body;
    const save = await data.create({
      id_user: id_user,
      id_data: id_data,
    });

    return res.status(200).json({
      status: 200,
      message: "Los datos se guardaron correctamente",
    });
  } catch (error) {
    console.log("======Error saveData======");
    return res.status(500).json({
      status: 500,
      message: "Ha ocurrido un error",
    });
  }
};
