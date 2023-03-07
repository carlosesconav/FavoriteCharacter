import { user } from "../models/User.js";
import * as dotenv from "dotenv";
dotenv.config();
import { encrypt, comparePassword } from "../config/handleBcrypt.js";
import chalk from "chalk";
import { data } from "../models/Data.js";


export const registerUser = async (req, res) => {

    try {

        console.log(chalk.blue("===== Init registerUser ====="));

        const { username, email, password } = req.body;
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
            message: "Ha ocurrido un error"
        });

    }

}

export const loginUser = async (req, res) => {

    try {

        console.log(chalk.blue("===== Init loginUser ====="));

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

        return res.status(500).json({
            status: 500,
            message: "Ha ocurrido un error"
        });

    }

}

export const editUser = async (req, res) => {

    try {

        console.log(chalk.blue("===== Init editUser ====="));

        const { id } = req.params;

        const userData = await user.findByPk(id);

        if (!userData) {

            return res.status(400).json({
                status: 400,
                message: "El usuario no ha sido encontrado"
            });

        }

        const editData = {
            name: userData.name,
            username: userData.username,
            email: userData.email
        }

        return res.status(200).json({
            status: 200,
            data: editData,
            message: "El usuario ha sido encontrado exitosamente"
        });

    } catch (error) {

        return res.status(500).json({
            status: 500,
            message: "Ha ocurrido un error"
        });

    }

}

export const updateUser = async (req, res) => {

    try {

        console.log(chalk.blue("===== Init updateUser ====="));

        const { id } = req.params;
        const { name, username, email } = req.body;
        const userData = await user.findByPk(id);

        if (!userData) {

            return res.status(400).json({
                status: 400,
                message: "El usuario no ha sido encontrado"
            });

        }

        userData.name = name
        userData.username = username
        userData.email = email

        await userData.save();

  

        return res.status(200).json({
            status: 200,
            data: userData,
            message: "El usuario ha sido actualizado exitosamente"
        });



    } catch (error) {

        console.log(error);

        return res.status(500).json({
            status: 500,
            message: "Ha ocurrido un error"
        });


    }

}

