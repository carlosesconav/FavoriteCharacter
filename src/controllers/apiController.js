import axios from "axios";
import chalk from "chalk";
import * as dotenv from "dotenv";
dotenv.config();

const urlAPI = process.env.ENDPOINT_API;

export const getCharacters = async function getCharacters(req, res) {
  try {
    console.log(chalk.bgGreen("======Init getCharacters======"));
    const {page} = req.params;
    
    const characters = await axios({
      method: "GET",
      url: `${urlAPI}/character/?page=${page}`,
      auth: {}
    });

    return res.status(200).json({
      status: 200,
      message: "Solicitud exitosa",
      pages: characters.data.info.pages,
      data: characters.data,
    });

  } catch (error) {

    console.log("======Error getCharacters======");
    return res.status(500).json({
      status: 500,
      message: "Ha ocurrido un error"
    });
  }
};


export const getOneCharacter = async function getOneCharacter(req, res){

    try {
        console.log(chalk.bgBlue("======Init getOneCharacter======"));
        const {id} = req.params;
        const character = await axios({

            method: "GET",
            url: `${urlAPI}/character/${id}`,
            auth: {}

        })

        return res.status(200).json({
            status: 200,
            message: "Solicitud exitosa",
            data: character.data
          });

    } catch (error) {
        console.log("======Error getOneCharacter======");
        return res.status(500).json({
            status: 500,
            message: "Ha ocurrido un error"
          });
        
    }

}
