// AQUI SE DEFINIRA LA FUNCION PARA VERIFICAR EL TOKE
//QUE VENGA DEL FRONT Y ASI PROTEGER LAS RUTAS.

import jwt from "jsonwebtoken";
import chalk from "chalk";
import fs from "fs";
import * as dotenv from "dotenv";
dotenv.config();

export async function verifyAuth(req, res, next) {
  try {
    const headerToken = req.headers.authorization;
    let data = {};
    let token;
    if (fs.existsSync("logs.json")) {
      data = fs.readFileSync("logs.json", "utf8");
      token = JSON.parse(data);
    }

    const logToken = token.token;

    console.log(logToken.toString());

    if (headerToken || headerToken === logToken.toString()) {
      console.log("next");
      next();
    } else {
      return res.status(401).json({
        Message: "ingrese token de autenticaion",
      });
    }
  } catch (error) {
    console.log("======Error verifyToken=====");
    console.log(error);
  }
}
