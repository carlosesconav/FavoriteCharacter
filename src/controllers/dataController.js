import { data } from "../models/Data.js"
import axios from "axios";
import chalk from "chalk";
import * as dotenv from "dotenv";
dotenv.config();

export const getFavorites = async (req, res) => {

    try {

        const { id_user } = req.params;
        const datas = await data.findAll({where: { id_user:id_user} });

        if(datas){
            return res.status(200).json({
                status: 200,
                data: datas,
                message: "Solicitud exitosa"
            });
    
        }else{
            return res.status(400).json({
                status: 400,
                data: datas,
                message: "Solicitud erronea"
            });
        }

    } catch (error) {
        
        console.log("======Error getFavorites======");

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
        console.log("======Error saveData======");
        return res.status(500).json({
            status: 500,
            message: "Ha ocurrido un error"
        });

    }


}

