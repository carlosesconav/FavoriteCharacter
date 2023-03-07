"use strict"

import { Router } from "express";
import { registerUser, loginUser } from "../controllers/userController.js";
import cors from "cors";


const route = Router();
route.use(cors());

//Rutas user.

route.post('/api/register', registerUser);
route.post('/api/login', loginUser);
route.get('/api', (req, res) => {

    res.json({
        status: 200,
        message: "Conexion exitosa"
    });
});

export default route;