import fs from "fs";
import * as dotenv from "dotenv";
dotenv.config();

export const verifyAuth =  async (req, res, next) => {
  try {
    const headerToken = req.headers.authorization;

    let data = {};
    let token;
    
    if (fs.existsSync("logs.json")) {
      data = fs.readFileSync("logs.json", "utf8");
      token = JSON.parse(data);
    }

    const logToken = token.token;

    if (headerToken || headerToken === logToken.toString()) {
      next();
    } else {
      return res.status(401).json({
        Message: "ingrese token de autenticaion",
      });
    }
  } catch (error) {
    console.log("======Error verifyToken=====");
    throw error;
  }
}


