import { user } from "../models/User.js";
import * as dotenv from "dotenv";
dotenv.config();
import { encrypt, comparePassword } from "../config/handleBcrypt.js";
import chalk from "chalk";


export const registerUser = async (req, res) => {

    try {

        console.log(chalk.green("==== Init register ===="));

        const { username, email, password } = req.body;

        console.log(req.body);

        const hashPassword = encrypt(password);

        const userData = await user.findOne({ where: { email } });

        const userEmail = userData.email;

        console.log(userEmail);

        if (!userEmail) {

            const registerUser = await user.create({

                username: username,
                email: email,
                password: hashPassword

            });

            return res.status(200).json({
                status: 200,
                data: registerUser,
                message: "El usuario ha sido registrado"
            });

        }

        return res.status(400).json({
            status: 400,
            message: "El usuario ya esta registrado"
        });


    } catch (error) {

        return res.status(500).json({
            status: 500,
            message: "Ha ocurrido un error en registerUser"
        });

    }

}

export const loginUser = async (req, res) => {

    try {

        console.log(chalk.blue("===== Init login ====="));

        const { email, password } = req.body;

        const userData = await user.findOne({ where: { email } });

        if (!userData) {

            return res.status(401).json({
                status: 401,
                message: "Credenciales invalidas"
            });

        }
        const checkPassword = await comparePassword(password, userData.password);
        const userEmail = userData.email;

        if (checkPassword && userEmail) {

            return res.status(200).json({
                status: 200,
                message: "El usuario ha ingresado exitosamente"
            });

        } else {

            return res.status(401).json({
                status: 401,
                message: "Credenciales invalidas"
            });

        }

    } catch (error) {
        console.log("error de login: ", error)
        return res.status(500).json({
            status: 500,
            message: "Ha ocurrido un error en loginUser"
        });

    }

}

