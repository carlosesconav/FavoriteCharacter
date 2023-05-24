"use restrict";

import { Router } from "express";
import {
    saveData,
    getFavorites
} from "../controllers/dataController.js";
import cors from "cors";


const route = Router();
route.use(cors());

//Rutas data.

route.post('/api/saveData', saveData);
route.get('/api/getFavorites/:id_user', getFavorites);

export default route;