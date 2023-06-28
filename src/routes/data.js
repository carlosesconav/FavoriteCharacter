"use restrict";

import { Router } from "express";
import { saveData, getFavorites } from "../controllers/dataController.js";
import { verifyAuth } from "../middlewares/Auth.js";
import cors from "cors";

const route = Router();
route.use(cors());

//Rutas data.

route.post("/api/saveData",verifyAuth ,saveData);
route.get("/api/getFavorites/:id_user",verifyAuth ,getFavorites);

export default route;
