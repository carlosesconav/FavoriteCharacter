import { data } from "../models/Data.js"
import axios from "axios";
import chalk from "chalk";
import * as dotenv from "dotenv";
dotenv.config();


export const getApi = async (req, res) => {

}

export const getFavorites = async (req, res) => {

    try {

        const { id_user } = req.body;
        const datas = await data.findAll({where: { id_user:id_user} });

        return res.status(200).json({
            status: 200,
            data: datas,
            message: "Solicitud exitosa"
        });

    } catch (error) {
        
        console.log(error);

        return res.status(500).json({
            status: 500,
            message: "Ha ocurrido un error"
        });

    }

}

export const saveData = async (req, res) => {

    try {

        const { id_user, id_data } = req.body;

        const save = await data.create({
            id_user: id_user,
            id_data: id_data
        });

        return res.status(200).json({
            status: 200,
            message: "Los datos se guardaron correctamente"
        });

    } catch (error) {

        return res.status(500).json({
            status: 500,
            message: "Ha ocurrido un error"
        });

    }


}

